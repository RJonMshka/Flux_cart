$(function () {

    // UNCOMMENT THE BELOW COMMENTED PART, RUN THE CODE IN BROWSER FOR ONCE
    // TO SET UP YOUR LOCAL-STORAGE
    // COMMENT IT AGAIN

    // // LOCAL-STORAGE SETUP START

    // let dataObject = {  
    //     "productsInCart":[  
    //        {  
    //           "p_id":"1",
    //           "p_name":"cotton tshirt",
    //           "p_variation":"solid green",
    //           "p_style":"ms13kt1906",
    //           "p_image":"./assets/images/T1.jpg",
    //           "p_selected_color":{  
    //              "name":"red",
    //              "hexcode":"#ED99A8"
    //           },
    //           "p_selected_size":{  
    //              "name":"small",
    //              "code":"s"
    //           },
    //           "p_available_options":{  
    //              "colors":[  
    //                 {  
    //                    "name":"green",
    //                    "hexcode":"#A3D2A1"
    //                 },
    //                 {  
    //                    "name":"yellow",
    //                    "hexcode":"#F9F8E6"
    //                 },
    //                 {  
    //                    "name":"red",
    //                    "hexcode":"#ED99A8"
    //                 }
    //              ],
    //              "sizes":[  
    //                 {  
    //                    "name":"small",
    //                    "code":"s"
    //                 },
    //                 {  
    //                    "name":"medium",
    //                    "code":"m"
    //                 },
    //                 {  
    //                    "name":"large",
    //                    "code":"l"
    //                 },
    //                 {  
    //                    "name":"extra large",
    //                    "code":"xl"
    //                 }
    //              ]
    //           },
    //           "p_quantity":1,
    //           "p_originalprice":11.0,
    //           "p_price":11.0,
    //           "c_currency":"$"
    //        },
    //        {  
    //           "p_id":"2",
    //           "p_name":"print girls tee",
    //           "p_variation":"pink rainbow",
    //           "p_style":"ms13kt1906",
    //           "p_image":"./assets/images/T2.jpg",
    //           "p_selected_color":{  
    //              "name":"pink",
    //              "hexcode":"#F1DDEF"
    //           },
    //           "p_selected_size":{  
    //              "name":"small",
    //              "code":"s"
    //           },
    //           "p_available_options":{  
    //              "colors":[  
    //                 {  
    //                    "name":"green",
    //                    "hexcode":"#A3D2A1"
    //                 },
    //                 {  
    //                    "name":"yellow",
    //                    "hexcode":"#F9F8E6"
    //                 },
    //                 {  
    //                    "name":"pink",
    //                    "hexcode":"#F1DDEF"
    //                 }
    //              ],
    //              "sizes":[  
    //                 {  
    //                    "name":"small",
    //                    "code":"s"
    //                 },
    //                 {  
    //                    "name":"medium",
    //                    "code":"m"
    //                 },
    //                 {  
    //                    "name":"large",
    //                    "code":"l"
    //                 },
    //                 {  
    //                    "name":"extra large",
    //                    "code":"xl"
    //                 }
    //              ]
    //           },
    //           "p_quantity":1,
    //           "p_originalprice":17.0,
    //           "p_price":17.0,
    //           "c_currency":"$"
    //        },
    //        {  
    //           "p_id":"3",
    //           "p_name":"flower pattern shirt",
    //           "p_variation":"blue",
    //           "p_style":"ms13kt1906",
    //           "p_image":"./assets/images/T3.jpg",
    //           "p_selected_color":{  
    //              "name":"blue",
    //              "hexcode":"#1169BD"
    //           },
    //           "p_selected_size":{  
    //              "name":"small",
    //              "code":"s"
    //           },
    //           "p_available_options":{  
    //              "colors":[  
    //                 {  
    //                    "name":"green",
    //                    "hexcode":"#A3D2A1"
    //                 },
    //                 {  
    //                    "name":"blue",
    //                    "hexcode":"#1169BD"
    //                 },
    //                 {  
    //                    "name":"red",
    //                    "hexcode":"#ED99A8"
    //                 }
    //              ],
    //              "sizes":[  
    //                 {  
    //                    "name":"small",
    //                    "code":"s"
    //                 },
    //                 {  
    //                    "name":"medium",
    //                    "code":"m"
    //                 },
    //                 {  
    //                    "name":"large",
    //                    "code":"l"
    //                 },
    //                 {  
    //                    "name":"extra large",
    //                    "code":"xl"
    //                 }
    //              ]
    //           },
    //           "p_quantity":1,
    //           "p_originalprice":21.0,
    //           "p_price":9.0,
    //           "c_currency":"$"
    //        },
    //        {  
    //           "p_id":"4",
    //           "p_name":"check pattern tshirt",
    //           "p_variation":"mens red",
    //           "p_style":"ms13kt1906",
    //           "p_image":"./assets/images/T4.jpg",
    //           "p_selected_color":{  
    //              "name":"red",
    //              "hexcode":"#ED99A8"
    //           },
    //           "p_selected_size":{  
    //              "name":"small",
    //              "code":"s"
    //           },
    //           "p_available_options":{  
    //              "colors":[  
    //                 {  
    //                    "name":"green",
    //                    "hexcode":"#A3D2A1"
    //                 },
    //                 {  
    //                    "name":"yellow",
    //                    "hexcode":"#F9F8E6"
    //                 },
    //                 {  
    //                    "name":"red",
    //                    "hexcode":"#ED99A8"
    //                 }
    //              ],
    //              "sizes":[  
    //                 {  
    //                    "name":"small",
    //                    "code":"s"
    //                 },
    //                 {  
    //                    "name":"medium",
    //                    "code":"m"
    //                 },
    //                 {  
    //                    "name":"large",
    //                    "code":"l"
    //                 },
    //                 {  
    //                    "name":"extra large",
    //                    "code":"xl"
    //                 }
    //              ]
    //           },
    //           "p_quantity":1,
    //           "p_originalprice":22.0,
    //           "p_price":22.0,
    //           "c_currency":"$"
    //        }
    //     ]
    //  };

    //  // Adding Database to LocalStorage
    // new LocalStorage('database').setData(dataObject);

    // // LOCAL-STORAGE SETUP END

    
    // Function to Empty Modal when it closes
    let emptyModal = function () {
        $('.modal-container').find('#modal-size').html('');
        $('#modal-quantity option').each(function () {
        $('.modal-container').find('.modal-color-options').find('form').html('');
            if ($(this).attr('selected'))
                $(this).removeAttr('selected');
        });
    }

    // Rendering Function to list all items
    let render = function (data, $container, previousData,calc) {
        data.forEach(function (item, index) {
            // Cloning the container
            let $tempContainer = $container.clone();
            $tempContainer.find('.item-details').find('h2').html(`${item.p_variation} ${item.p_name}`);
            $tempContainer.find('.style-number').html(item.p_style);
            $tempContainer.find('.color-type').html(item.p_selected_color.name);
            $tempContainer.find('.size-number').html(item.p_selected_size.code.toUpperCase());
            $tempContainer.find('.price').html(item.p_price * item.p_quantity);
            $tempContainer.find('.quantity-number').html(item.p_quantity);
            $tempContainer.find('.quantity-desktop').find('h2').html(item.p_quantity);
            $tempContainer.find('.price-desktop').find('h2').html(`$${item.p_price * item.p_quantity}`);
            calc.IncQuantity(item.p_quantity)
            $tempContainer.find('.image-info').attr('src', item.p_image);
            calc.IncTotal(item.p_price * item.p_quantity);

            // Attaching Event to Edit Button
            $tempContainer.find('.edit-button').on('click', function () {
                $('.modal-container').css('display', 'block');
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
                                //    UPDATING LOCAL-STORAGE
                                previousData.productsInCart[index].p_selected_color.name = $(this).attr('id');
                                previousData.productsInCart[index].p_selected_color.hexcode = selectedHexcode;
                                previousData.productsInCart[index].p_selected_size.code = newSize;
                                previousData.productsInCart[index].p_selected_size.name = newSizeName;
                                previousData.productsInCart[index].p_quantity = parseInt(newQuantity);
                                new LocalStorage('database').setData(previousData);
                                window.location.reload();
                            }
                        });
                    }
                });
            });
            // MODAL CLOSE BUTTON EVENT
            $('.modal-container').find('.close-button').on('click', function () {
                $('.modal-container').css('display', 'none');
                emptyModal();
            });

            // MODAL OUTSIDE CLICK EVENT
            window.onclick = function (event) {
                if (event.target == this.document.getElementsByClassName('modal-container')[0]) {
                    $('.modal-container').css('display', 'none');
                    emptyModal();
                }
            }
            // APPENDING EACH ITEM CONTAINER
            $('.checkout-container').before($tempContainer);
        });
        // REMOVING ORIGINAL CONTAINER
        $container.remove();
    }

    // DISCOUNT LOGIC
    let discountAndShippingLogic = function (amount, count) {
        let discount;
        if (amount < 50) {
            $('#shipping-message').html('You have to spend $50 to be eligible for Free Shipping');
            $('#shipping-cost').html('PAID');
        }

        if (count == 3) {
            discount = amount * 0.05;
            $('#code-applied').html('JF05 APPLIED');
        } else if (count > 3 && count <= 6) {
            discount = amount * 0.1;
            $('#code-applied').html('JF10 APPLIED');
        } else if (count > 6) {
            discount = amount * 0.25;
            $('#code-applied').html('JF25 APPLIED');
        }
        $('#discount').html(discount);
        $('#total-amount').html(amount - discount);
    }

    // Class to Interact with LocalStorage
    class LocalStorage {
        constructor(database){
            this.database = database;
        }

        getData(){
            return localStorage.getItem(this.database);
        }

        setData(data){
            localStorage.setItem(this.database,JSON.stringify(data));
        }
    }

    // Create Elements will objects
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

    // Class to calculate Estimated Total and total Quantity
    class Calculate{
        constructor(total,quantity){
            this.total = total;
            this.quantity = quantity;
        }
        IncTotal(newVal){
            this.total = this.total + parseInt(newVal);
        }

        IncQuantity(newQuant){
            this.quantity = this.quantity + parseInt(newQuant);
        }

        getTotal(){
            return this.total;
        }

        getQuantity(){
            return this.quantity;
        }
    }

    // Getting the data from localStorage and appending it to DOM
    let data = new LocalStorage('database').getData();
    console.log(JSON.parse(data).productsInCart);
    let products = JSON.parse(data).productsInCart;
    // Instance of Calculate
    let calc = new Calculate(0,0);

    // Calling the Render Function
    render(products, $('.item-container'), JSON.parse(data),calc);
    $('#item-count').html(calc.getQuantity());
    $('#total-cost-price').html(calc.getTotal());

    // Applying Discount Logic
    discountAndShippingLogic(calc.getTotal(), calc.getQuantity());

});