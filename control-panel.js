import { Dispatcher, Store } from './flux';

const controlPanelDispatcher = new Dispatcher();

export const EDIT_MODAL = 'EDIT_MODAL';

const editModalAction = (data)=>{
    return {
        'data': data,
        'type':EDIT_MODAL
    }
}

// Function to Empty Modal when it closes
var emptyModal = ()=> {
    $('.modal-container').find('#modal-size').html('');
    $('#modal-quantity option').each(function () {
    $('.modal-container').find('.modal-color-options').find('form').html('');
        if ($(this).attr('selected'))
            $(this).removeAttr('selected');
    });
}

class View {
    constructor(){
        this.quantity = 0;
        this.total = 0;
    }

    initialize(data){
        console.log('initialize is getting called');
        this.render(data,$('.item-container'));
        this.calculateDiscount();
    }

    render(data,$container){
        console.log('render is getting called');
        $container.removeClass('clone-containers');
        $('.clone-containers').remove();
        data.productsInCart.forEach((item,index)=>{
            let $tempContainer = $container.clone();
            $tempContainer.addClass('clone-containers');
            $tempContainer.find('.item-details').find('h2').html(`${item.p_variation} ${item.p_name}`);
            $tempContainer.find('.style-number').html(item.p_style);
            $tempContainer.find('.color-type').html(item.p_selected_color.name);
            $tempContainer.find('.size-number').html(item.p_selected_size.code.toUpperCase());
            $tempContainer.find('.price').html(item.p_price * item.p_quantity);
            $tempContainer.find('.quantity-number').html(item.p_quantity);
            $tempContainer.find('.quantity-desktop').find('h2').html(item.p_quantity);
            $tempContainer.find('.price-desktop').find('h2').html(`$${item.p_price * item.p_quantity}`);
            
            this.incrementQuantity(item.p_quantity);

            $tempContainer.find('.image-info').attr('src', item.p_image);

            this.incrementTotal(item.p_price * item.p_quantity);

            // Attaching Event to Edit Button
            $tempContainer.find('.edit-button').on('click', function () {
                $('.modal-container').show();
                $('.modal-container').find('#modal-item-name').html(`${item.p_variation} ${item.p_name}`);
                $('.modal-container').find('.modal-price').html(item.p_price);
                $('.modal-container').find('.image-part').find('img').attr('src', item.p_image);
                // Adding coloured Radio Buttons
                item.p_available_options.colors.forEach(function (color) {
                    let $label = new CreateElements().createLabel().attr('for', color.name);
                    let $input = new CreateElements().createInput('radio').attr('id', color.name).attr('name', 'colors').addClass('radio-buttons');
                    $input.css('background-color', color.hexcode);
                    if (color.name == item.p_selected_color.name) {
                        $input.attr('checked', true);
                    }
                    $label.appendTo($('.modal-container').find('.modal-color-options').find('form'));
                    $input.appendTo($('.modal-container').find('.modal-color-options').find('form'));
                });
                // Appending Colour Options
                $('<option>Size</option>').appendTo($('.modal-container').find('#modal-size'));
                item.p_available_options.sizes.forEach(function (size) {
                    let $option = new CreateElements().createOption();
                    $option.attr('value', size.code).attr('role','listitem');
                    $option.html(size.name);
                    if (size.code == item.p_selected_size.code)
                        $option.attr('selected', true);
                    $option.appendTo($('.modal-container').find('#modal-size'));
                });

                $('#modal-quantity option').each(function () {
                    if ($(this).val() == item.p_quantity)
                        $(this).attr('selected', true);
                });
                // Attaching Event to EDIT button of Modal
                $('#modal-button').off('click').on('click', function () {
                    let selectedHexcode;
                    let newQuantity = $('.modal-container').find('#modal-quantity').val();
                    let newSize = $('.modal-container').find('#modal-size').val();
                    let newSizeName = $('#modal-size option:selected').html();
                    if (newSize == 'Size') {
                        alert('please select a size');
                    } else {
                        $('.modal-color-options').find('input').each(function () {
                            if ($(this).is(':checked')) {
                                // CHECKING IF RADIO BUTTON IS CHECKED
                                item.p_available_options.colors.forEach((color) => {
                                    if ($(this).attr('id') == color.name) {
                                        selectedHexcode = color.hexcode;
                                    }
                                });
                                //    UPDATING DATA
                                data.productsInCart[index].p_selected_color.name = $(this).attr('id');
                                data.productsInCart[index].p_selected_color.hexcode = selectedHexcode;
                                data.productsInCart[index].p_selected_size.code = newSize;
                                data.productsInCart[index].p_selected_size.name = newSizeName;
                                data.productsInCart[index].p_quantity = parseInt(newQuantity);
                                
                                // Dispatching Action
                                controlPanelDispatcher.dispatch(editModalAction(data));

                                $('.modal-container').hide();
                                emptyModal();
                            }
                        });
                    }
                });
            });

            

            // MODAL CLOSE BUTTON EVENT
            $('.modal-container').find('.close-button').on('click', function () {
                $('.modal-container').hide();
                emptyModal();
            });

            // MODAL OUTSIDE CLICK EVENT
            window.onclick = function (event) {
                if (event.target == this.document.getElementsByClassName('modal-container')[0]) {
                    $('.modal-container').hide();
                    emptyModal();
                }
            }
            // APPENDING EACH ITEM CONTAINER
            $('.checkout-container').before($tempContainer);
        });
        $container.remove();
    }

    calculateDiscount(){
        let discount;
        if (this.total < 50) {
            $('#shipping-message').html('You have to spend $50 to be eligible for Free Shipping');
            $('#shipping-cost').html('PAID');
        }

        if (this.quantity == 3) {
            discount = this.total * 0.05;
            $('#code-applied').html('JF05 APPLIED');
        } else if (this.quantity > 3 && this.quantity <= 6) {
            discount = this.total * 0.1;
            $('#code-applied').html('JF10 APPLIED');
        } else if (this.quantity > 6) {
            discount = this.total * 0.25;
            $('#code-applied').html('JF25 APPLIED');
        }
        $('#discount').html(discount);
        $('#total-amount').html(this.total - discount);
        $('#item-count').html(this.quantity);
        $('#total-cost-price').html(this.total);
        this.resetValues();
    }

    incrementQuantity(newVal){
        this.quantity += parseInt(newVal);
    }

    incrementTotal(newVal){
        this.total += parseInt(newVal);
    }

    resetValues() {
        this.quantity = 0;
        this.total = 0;
    }
}


class CreateElements{
    createLabel(){
        return $('<label>');
    }
    createInput(type){
        return $(`<input type = ${type}>`);
    }
    createOption(){
        return $('<option>');
    }
}

var view = new View();

const cartStore = new Store(controlPanelDispatcher);

cartStore.addListener((state)=>{
    console.log('render is performed');
    view.render(state,$('.item-container').eq(0));
    view.calculateDiscount();
});

view.initialize(cartStore.getInitialState());



