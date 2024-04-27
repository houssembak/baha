import { HomeComponent } from "./pages/home/home.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { Routes } from "@angular/router";
import { CalendarComponent } from "./pages/calendar/calendar.component";
import { DoctorProfileComponent } from "./pages/doctor-profile/doctor-profile.component";
import { PatientProfileComponent } from './pages/patient-profile/patient-profile.component';
import { EditPatientProfilComponent } from "./pages/edit-patient-profil/edit-patient-profil.component";



export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard/home",
  },
  {
    path: "dashboard",
    children: [
      {
        path: "home",
        async loadComponent() {
          return (await import("./pages/home/home.component")).HomeComponent;
        },
      },
    ],
  },
  {
    path: "chat",
    component: ChatComponent,
  },
  {
    path: "calendar",
    component: CalendarComponent,
  },
  {
    path: "MyProfile",
    component: DoctorProfileComponent,
  },
  {
    path: "patientprofile",
    component: PatientProfileComponent,
  },
  {
    path: "editpatientprofile",
    component: EditPatientProfilComponent,
  },

  // {
  //   path: "**",
  //   async loadComponent() {
  //     return (await import("./pages/errors/page-404/page-404.component"))
  //       .Page404Component;
  //   },
  // },
];
