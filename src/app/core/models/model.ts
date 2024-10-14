export interface DetailsCard {
  icon: string;
  title: string;
  subtitle: string;
  length?: number;
}

export interface Profil {
  attractivite?: string;
  date?: string;
  experience?: string;
  id?: string;
  metier_fonc?: any;
  points_amelioration?: string;
  points_forts?: string;
  profil?: string;
  recommandations?: string;
  techno_majeures?: any;
  techno_mineures?: any;
}

export interface WordingUpload{
  title: string;
  subTitle: string;
  section1_title: string;
  section2_title: string;
}

export interface Matching {
  appel_offre?: string;
  candidat?: string;
  classe_matching?: string;
  client_ao?: string;
  competences_score?: string;
  date?: string;
  domaine_ao?: any;
  domaine_candidat?: string;
  domaine_score?: string;
  experience_score?: string;
  formation_score?: string;
  global_score?: string;
  id?: string;
  justifications?: string;
  methodo_ao?: string;
  methodo_candidat?: string;
  methodologie_score?: string;
  profil_attendu?: any;
  profil_candidat?: any;
  profil_score?: string;
  recommandations?: string;
  techno_ao?: any;
  techno_candidat?: string;
  techno_majeur_score?: string;
}

export interface AppelOffre {
  id: string;
  date: string;
  emetteur: string;
  duree: string;
  date_demarrage: string;
  profils_demandes: string;
  techno_majeures: string;
  techno_secondaires: string;
  experience_requise: string;
  domaines_fonctionnels: string;
  synthese_ao: string;
  synthese_profil_recherche: string;
  description_ao: string;
  description_profil_recherche: string;
}
