import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import 'bulma/css/bulma.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Add PrimeVue
import PrimeVue from "primevue/config";

//Add Theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';


//Add PrimeFlex
import 'primeflex/primeflex.css';

//Add ToastService
import ToastService from "primevue/toastservice";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Row from "primevue/row";
import Sidebar from "primevue/sidebar";
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Card from "primevue/card";
import FileUpload from 'primevue/fileupload';
import Checkbox from 'primevue/checkbox';
import InlineMessage from 'primevue/inlinemessage';

createApp(App)
    .use(router)
    .use(PrimeVue,{ripple:true})
    .use(ToastService)
    .component('pv-data-table', DataTable)
    .component('pv-column',Column)
    .component('pv-toolbar',Toolbar)
    .component('pv-input-text',InputText)
    .component('pv-textarea',Textarea)
    .component('pv-button',Button)
    .component('pv-row',Row)
    .component('pv-sidebar',Sidebar)
    .component('pv-checkbox', Checkbox)
    .component('pv-menu',Menu)
    .component('pv-dialog',Dialog)
    .component('pv-toast',Toast)
    .component('pv-dropdown',Dropdown)
    .component('pv-tag',Tag)
    .component('pv-card',Card)
    .component('pv-file-upload',FileUpload)
    .component('pv-inline-message',InlineMessage)
    .mount('#app')