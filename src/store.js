import {reactive} from 'vue';

export const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    imagBasePath: 'http://127.0.0.1:8000/storage/',

    menuItems: [
        {
            label: 'Home',
            routeName: 'homepage'
        },
        {
            label: 'Store',
            routeName: 'store'
        },
        {
            label: 'About',
            routeName: 'about'
        },
        {
            label: 'Contacts',
            routeName: 'contacts'
        },
       

      
    ]


});