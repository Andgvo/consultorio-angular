import { Breadcrumb } from '@models/template/Breadcrumb';
import { NavigationLink } from '@models/template/NavigationLink';

const LOGIN = new NavigationLink("Login", "", "account_circle", "Inicio de sesión");
const HOME = new NavigationLink("Inicio", "/app/", "home", "Recepción de documentos necesarios para el registro");
const CUSTOM_THEME = new NavigationLink("Custom theme", "view-custom-theme", "format_paint", "Override the default theme and choose your palette colors");
const USAGE = new NavigationLink("Usage", "view-custom-theme", "format_paint", "How to generate modules and components in this template, structure and more");
const BUTTONS_THEME = new NavigationLink("Buttons theme", "view-buttons", "radio_button_checked", "Use different buttons bootstrap or angular theme");
const DRAG_AND_DROP = new NavigationLink("Drag and drop list", "view-DND-list", "format_list_numbered", "Sort your list as you want");
const FORMS_AND_VALIDATIONS = new NavigationLink("Forms and validation", "view-form", "check_circle", "Validate form with different input");
const DYNAMIC_FORM = new NavigationLink("Dynamic form", "dynamic-form", "dynamic_feed", "Create a form with your own form elements and parametters");
const MESSAGES = new NavigationLink("Messages", "view-messages", "message", "Alerts, Messages and tooltip");

export const BC_HOME = new Breadcrumb(HOME);
export const BC_BUTTONS = new Breadcrumb(BUTTONS_THEME, [HOME]);
export const BC_DRAG_AND_DROP = new Breadcrumb(DRAG_AND_DROP, [HOME]);
export const BC_FORMS_AND_VALIDATION = new Breadcrumb(FORMS_AND_VALIDATIONS, [HOME]);
export const BC_DYNAMIC_FORM = new Breadcrumb(DYNAMIC_FORM, [HOME]);
export const BC_MESSAGES = new Breadcrumb(MESSAGES, [HOME]);
export const BC_CUSTOM_THEME = new Breadcrumb(CUSTOM_THEME, [HOME]);

//Nomenclatura de breadcrums BC_Name_Component
export const linksAdmin: NavigationLink[] = [HOME, CUSTOM_THEME, USAGE, BUTTONS_THEME, DRAG_AND_DROP, FORMS_AND_VALIDATIONS, DYNAMIC_FORM, MESSAGES];
export const linksPage: NavigationLink[] = [LOGIN];
