import { Breadcrumb } from '@models/template/Breadcrumb';
import { NavigationLink } from '@models/template/NavigationLink';

const LOGIN = new NavigationLink("Login", "", "account_circle", "Inicio de sesión");
const HOME = new NavigationLink("Inicio", "/app/", "home", "Recepción de documentos necesarios para el registro");
const PACIENTE = new NavigationLink("Pacientes", "/app/paciente", "account_circle", "Gestión de pacientes");
const DOCTOR = new NavigationLink("Doctores", "/app/doctor", "account_circle", "Gestión de doctores");
const CITAS = new NavigationLink("Cita", "/app/cita", "account_circle", "Gestión de citas");

export const BC_HOME = new Breadcrumb(HOME);
export const BC_PACIENTE = new Breadcrumb(PACIENTE, [HOME]);
export const BC_DOCTOR = new Breadcrumb(DOCTOR, [HOME]);

//Nomenclatura de breadcrums BC_Name_Component
export const linksAdmin: NavigationLink[] = [HOME, PACIENTE, DOCTOR];
export const linksPage: NavigationLink[] = [LOGIN];