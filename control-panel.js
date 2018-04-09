import { Dispatcher, Store } from './flux';

// Instance of Dispatcher
const controlPanelDispatcher = new Dispatcher();

// Action Type 
export const EDIT_MODAL = 'EDIT_MODAL';

// Edit Button (Modal) Action Object Creator Function
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

// Class VIEW to Render the Database in UI
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

        // Clearing Values of quantity and total
        this.resetValues();

        // Removing clone class from the container
        $container.removeClass('clone-containers');

        // Removing containers which are having class clone-containers
        $('.clone-containers').remove();

        // Iterate over Each Data in ProductsInCart Array
        data.productsInCart.forEach((item,index)=>{

            // Creating a Temporary Container
            let $tempContainer = $container.clone();

            // Adding clone class to Cloned Container
            $tempContainer.addClass('clone-containers');

            // DOM manipulations
            $tempContainer.find('.item-details').find('h2').html(`${item.p_variation} ${item.p_name}`);
            $tempContainer.find('.style-number').html(item.p_style);
            $tempContainer.find('.color-type').html(item.p_selected_color.name);
            $tempContainer.find('.size-number').html(item.p_selected_size.code.toUpperCase());
            $tempContainer.find('.price').html(item.p_price * item.p_quantity);
            $tempContainer.find('.quantity-number').html(item.p_quantity);
            $tempContainer.find('.quantity-desktop').find('h2').html(item.p_quantity);
            $tempContainer.find('.price-desktop').find('h2').html(`$${item.p_price * item.p_quantity}`);
            
            // Increment Quantity variable
            this.incrementQuantity(item.p_quantity);

            $tempContainer.find('.image-info').attr('src', item.p_image);

            // Increment Total Variable
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
                    // Appending labels and inputs
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
                    if ($(this).val() == item.p_quantity){

                        // Make the right quantity as SELECTED
                        $(this).attr('selected','selected');

                        // Trigger a change in select option, for Selected option
                        $('#modal-quantity').val($(this).val()).trigger('change');
                    }
                });

                // Attaching Event to EDIT button of Modal
                $('#modal-button').off('click').on('click', function () {

                    // Getting new values 
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
                                //    UPDATING DATA with new Values
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

    // Function to calculate Discount
    calculateDiscount(){
        let discount;

        // NO FREE Shipping Message
        if (this.total < 50) {
            $('#shipping-message').html('You have to spend $50 to be eligible for Free Shipping');
            $('#shipping-cost').html('PAID');
        }

        // 5% Discount
        if (this.quantity == 3) {
            discount = this.total * 0.05;
            $('#code-applied').html('JF05 APPLIED');

            // 10% Discount
        } else if (this.quantity > 3 && this.quantity <= 6) {
            discount = this.total * 0.1;
            $('#code-applied').html('JF10 APPLIED');

            // 25% Discount
        } else if (this.quantity > 6) {
            discount = this.total * 0.25;
            $('#code-applied').html('JF25 APPLIED');
        }

        // Reflects Total with discount And Discount in UI
        $('#discount').html(discount);
        $('#total-amount').html(this.total - discount);

        // Displays Total items and total estimated price
        $('#item-count').html(this.quantity);
        $('#total-cost-price').html(this.total);

    }

    // Incementing Total Quantity
    incrementQuantity(newVal){
        this.quantity += parseInt(newVal);
    }

    // Incrementing Total Price
    incrementTotal(newVal){
        this.total += parseInt(newVal);
    }

    // Resetting to Default Values
    resetValues() {
        this.quantity = 0;
        this.total = 0;
    }
}

// Class to create dynamic Elements
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

// Instance of view Class
var view = new View();

// Instance of Store
const cartStore = new Store(controlPanelDispatcher);

// Adding Listener to Store
cartStore.addListener((state)=>{
    console.log('render is performed');

    // Re-render
    view.render(state,$('.item-container').eq(0));
    view.calculateDiscount();
});

// Initialize Function of VIEW which gets the initialState of DATA in store
view.initialize(cartStore.getInitialState());



