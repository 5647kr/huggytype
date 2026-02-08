interface CardDatas {
  IMAGE_COURS: string;
  PBLANC_IDNTFY_NO: string;
  AGE_INFO: string;
  BDWGH_INFO: string;
  SEX_NM: string;
}

interface DetailDatas extends CardDatas {
  COLOR_NM: string;
  DISCVRY_PLC_INFO: string;
  IMAGE_COURS: string;
  JURISD_INST_NM: string;
  NEUT_YN: string;
  PARTCLR_MATR: string | null;
  PBLANC_BEGIN_DE: string;
  PBLANC_END_DE: string;
  REFINE_LOTNO_ADDR: string;
  REFINE_ROADNM_ADDR: string;
  SFETR_INFO: string;
  SHTER_NM: string;
  SHTER_TELNO: string;
  SIGUN_NM: string;
  SPECIES_NM: string;
  STATE_NM: string;
}