export class Store {
    constructor(dispatcher){
        this.listeners = [];
        this.state = this.getInitialState();
        dispatcher.register(this.onDispatch.bind(this));
    }
    getInitialState(){
        return {  
            "productsInCart":[  
               {  
                  "p_id":"1",
                  "p_name":"cotton tshirt",
                  "p_variation":"solid green",
                  "p_style":"ms13kt1906",
                  "p_image":"./assets/images/T1.jpg",
                  "p_selected_color":{  
                     "name":"red",
                     "hexcode":"#ED99A8"
                  },
                  "p_selected_size":{  
                     "name":"small",
                     "code":"s"
                  },
                  "p_available_options":{  
                     "colors":[  
                        {  
                           "name":"green",
                           "hexcode":"#A3D2A1"
                        },
                        {  
                           "name":"yellow",
                           "hexcode":"#F9F8E6"
                        },
                        {  
                           "name":"red",
                           "hexcode":"#ED99A8"
                        }
                     ],
                     "sizes":[  
                        {  
                           "name":"small",
                           "code":"s"
                        },
                        {  
                           "name":"medium",
                           "code":"m"
                        },
                        {  
                           "name":"large",
                           "code":"l"
                        },
                        {  
                           "name":"extra large",
                           "code":"xl"
                        }
                     ]
                  },
                  "p_quantity":1,
                  "p_originalprice":11.0,
                  "p_price":11.0,
                  "c_currency":"$"
               },
               {  
                  "p_id":"2",
                  "p_name":"print girls tee",
                  "p_variation":"pink rainbow",
                  "p_style":"ms13kt1906",
                  "p_image":"./assets/images/T2.jpg",
                  "p_selected_color":{  
                     "name":"pink",
                     "hexcode":"#F1DDEF"
                  },
                  "p_selected_size":{  
                     "name":"small",
                     "code":"s"
                  },
                  "p_available_options":{  
                     "colors":[  
                        {  
                           "name":"green",
                           "hexcode":"#A3D2A1"
                        },
                        {  
                           "name":"yellow",
                           "hexcode":"#F9F8E6"
                        },
                        {  
                           "name":"pink",
                           "hexcode":"#F1DDEF"
                        }
                     ],
                     "sizes":[  
                        {  
                           "name":"small",
                           "code":"s"
                        },
                        {  
                           "name":"medium",
                           "code":"m"
                        },
                        {  
                           "name":"large",
                           "code":"l"
                        },
                        {  
                           "name":"extra large",
                           "code":"xl"
                        }
                     ]
                  },
                  "p_quantity":1,
                  "p_originalprice":17.0,
                  "p_price":17.0,
                  "c_currency":"$"
               },
               {  
                  "p_id":"3",
                  "p_name":"flower pattern shirt",
                  "p_variation":"blue",
                  "p_style":"ms13kt1906",
                  "p_image":"./assets/images/T3.jpg",
                  "p_selected_color":{  
                     "name":"blue",
                     "hexcode":"#1169BD"
                  },
                  "p_selected_size":{  
                     "name":"small",
                     "code":"s"
                  },
                  "p_available_options":{  
                     "colors":[  
                        {  
                           "name":"green",
                           "hexcode":"#A3D2A1"
                        },
                        {  
                           "name":"blue",
                           "hexcode":"#1169BD"
                        },
                        {  
                           "name":"red",
                           "hexcode":"#ED99A8"
                        }
                     ],
                     "sizes":[  
                        {  
                           "name":"small",
                           "code":"s"
                        },
                        {  
                           "name":"medium",
                           "code":"m"
                        },
                        {  
                           "name":"large",
                           "code":"l"
                        },
                        {  
                           "name":"extra large",
                           "code":"xl"
                        }
                     ]
                  },
                  "p_quantity":1,
                  "p_originalprice":21.0,
                  "p_price":9.0,
                  "c_currency":"$"
               },
               {  
                  "p_id":"4",
                  "p_name":"check pattern tshirt",
                  "p_variation":"mens red",
                  "p_style":"ms13kt1906",
                  "p_image":"./assets/images/T4.jpg",
                  "p_selected_color":{  
                     "name":"red",
                     "hexcode":"#ED99A8"
                  },
                  "p_selected_size":{  
                     "name":"small",
                     "code":"s"
                  },
                  "p_available_options":{  
                     "colors":[  
                        {  
                           "name":"green",
                           "hexcode":"#A3D2A1"
                        },
                        {  
                           "name":"yellow",
                           "hexcode":"#F9F8E6"
                        },
                        {  
                           "name":"red",
                           "hexcode":"#ED99A8"
                        }
                     ],
                     "sizes":[  
                        {  
                           "name":"small",
                           "code":"s"
                        },
                        {  
                           "name":"medium",
                           "code":"m"
                        },
                        {  
                           "name":"large",
                           "code":"l"
                        },
                        {  
                           "name":"extra large",
                           "code":"xl"
                        }
                     ]
                  },
                  "p_quantity":1,
                  "p_originalprice":22.0,
                  "p_price":22.0,
                  "c_currency":"$"
               }
            ]
         };
    }
    onDispatch(action){
        switch(action.type) {
            case 'EDIT_MODAL':
            this.state = action.data;
            this.emitChange();
            break;
        }
    }
    addListener(listener){
        this.listeners.push(listener);
    }
    emitChange(){
        this.listeners.forEach(listener=>listener(this.state));
    }

}