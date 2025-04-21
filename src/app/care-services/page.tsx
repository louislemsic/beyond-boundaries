"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle, Search, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

export default function CareServicesPage() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Define the establishments data
  const establishments = [
    // Region 1
    {
      region: "Region 1",
      name: "Ilocos Sur Povincial Hospital – Gabriela Silang",
      nature: "Hospital",
      address: "Quirino Blvd., Tamag Vigan Ilocos Sur",
      contact: "09272957363/ 09175641530",
      website: "https://facebook.com/profile.php?id=518133551621679"
    },
    {
      region: "Region 1",
      name: "Ilocos Training and Regional Medical Center",
      nature: "Medical Center",
      address: "Parian, San Fernando CIty, La Union",
      contact: "(072) 607-6418/ (072) 607-9912",
      website: "https://facebook.com/profile.php?id=619945725194906&__tn__=C-R"
    },
    {
      region: "Region 1",
      name: "Mariano Marcos Memorial Hospital and Medical Center",
      nature: "Medical Center",
      address: "Barangay 6 San Julian, Batac, Ilocos Norte",
      contact: "(077) 600-8000",
      website: "https://facebook.com/PublicHealthMmmhMcOfficial/"
    },
    {
      region: "Region 1",
      name: "Region 1 Medical Center (PINAS – Unit)",
      nature: "Medical Center",
      address: "Arellano St. Dagupan City, Pangasinan 2400",
      contact: "(075) 515-8916/ 515-3030",
      website: "https://www.facebook.com/r1mcofficial/?rf=1533018856919070"
    },
    
    // Region 2
    {
      region: "Region 2",
      name: "Cagayan Valley Medical Center",
      nature: "Medical Center",
      address: "Dalan na Pagayaya, Carig Sur, Tuguegarao, Cagayan",
      contact: "(078) 304-1410 / (078) 304­1810",
      website: "https://www.facebook.com/CVMCHealthCare/"
    },
    {
      region: "Region 2",
      name: "Veterans Regional Hospital",
      nature: "Hospital",
      address: "Magsaysay, Bayombong, Nueva Vizcaya",
      contact: "(078) 805-3561 loc. 1225",
      website: "https://www.facebook.com/pages/category/Medical-Company/Veterans-Regional-Hospital-Department-of-Pediatrics-906043706139194/"
    },
    
    // Region 3
    {
      region: "Region 3",
      name: "Allied Care Experts Medical Center (EmbrACE Unit) – Baliwag",
      nature: "Medical Center",
      address: "Pinagbarilan, Baliuag, Bulacan",
      contact: "0933-873-7688 / (044) 816-1000 Loc 204",
      website: "https://www.facebook.com/pages/category/Health-Beauty/Embrace-Unit-396007940825591/"
    },
    {
      region: "Region 3",
      name: "Apalit Doctors Hospital, Incorporated (ADHope Unit)",
      nature: "Hospital",
      address: "Gonzales Ave, San Juan, Apalit, Pampanga",
      contact: "09362724170/ 09432880323",
      website: "https://www.facebook.com/apalitdoctors/"
    },
    {
      region: "Region 3",
      name: "Bataan General Hospital (Bataan HAVEN)",
      nature: "Hospital/ Harm reduction facility",
      address: "Manahan St., Tenejero, Balanga City, Bataan",
      contact: "(047) 237-1274/ (047) 237-1275 loc. 103/ 09998844522",
      website: "https://www.facebook.com/bataangeneralhospitalofficial/"
    },
    {
      region: "Region 3",
      name: "Bulacan Medical Center (Luntiang Silong)",
      nature: "Medical Center",
      address: "3rd Flr Pay 3 – Rm 301 Mojon, City of Malolos, Bulacan",
      contact: "09234051309 / 09155214322",
      website: "https://www.facebook.com/LuntiangSilong.BMC/"
    },
    {
      region: "Region 3",
      name: "Dr. Paulino J. Garcia Memorial Research and Medical Center (Sanctuario De Paulino)",
      nature: "Medical Center",
      address: "Mabini St., Cabanatuan City, Nueva Ecija",
      contact: "(044)463-8888 loc. 181 / 09177736638/ 09175716869",
      website: "https://www.facebook.com/drpjgmrmc.doh/"
    },
    {
      region: "Region 3",
      name: "Jose B. Lingad Memorial Regional Hospital (Bahay LInGAD)",
      nature: "Hospital",
      address: "Brgy. San Dolores, San Fernando, Pampanga",
      contact: "(045) 435-6801 / 09336215028",
      website: "https://www.facebook.com/bahaylingad/"
    },
    {
      region: "Region 3",
      name: "James L. Gordon Memorial Hospital (L.E.A.D. Shelter)",
      nature: "Hospital",
      address: "#1 Perimeter Rd., New Asinan, Olongapo City",
      contact: "(047) 602-4052/ 09988627015",
      website: "https://www.facebook.com/pages/category/Hospital/James-L-Gordon-Memorial-Hospital-188192881233079/"
    },
    {
      region: "Region 3",
      name: "Premiere Medical Center (TAHANAN sa Premiere)",
      nature: "Medical Center",
      address: "Maharlika Highway, Daan Sarile, Cabanatuan City, Nueva Ecija",
      contact: "(044) 463-7845 to 49 loc. 2073/ 09322128175/ 09052944300/ 095968173441",
      website: "https://www.facebook.com/tahanan.pmc"
    },
    {
      region: "Region 3",
      name: "President Ramon Magsaysay Memorial Hospital (Balin Kalinga)",
      nature: "Hospital",
      address: "Zambales Medical Society Building (beside Eye Center Clinic) Palanginan, Iba Zambales",
      contact: "09153966014/ 09192442299",
      website: "https://www.facebook.com/RHWCAngeles/posts/httpswwwfacebookcomgroups1427532984164076permalink1801616243422413/1866093107001550/"
    },
    {
      region: "Region 3",
      name: "Tarlac Provincial Hospital (TPH Cares)",
      nature: "Hospital",
      address: "San Vicente, Tarlac City",
      contact: "(045) 491-8970 loc. 247",
      website: "https://www.facebook.com/TPHCARES/"
    },
    
    // Region 4A
    {
      region: "Region 4A",
      name: "Batangas Medical Center (BATMC Wellness Zone)",
      nature: "Medical Center",
      address: "Kumintang Ibaba, Batangas City",
      contact: "(043) 723-0165",
      website: "https://www.facebook.com/HACTcares/"
    },
    {
      region: "Region 4A",
      name: "Calamba Doctors Hospital (Plus Life Center)",
      nature: "Hospital",
      address: "San Cristobal Bridge, Calamba, Laguna",
      contact: "(049) 545 7371",
      website: "https://www.facebook.com/CDHOFFICIALPAGE/"
    },
    {
      region: "Region 4A",
      name: "General Emilio Aguinaldo Memorial Hospital",
      nature: "Hospital",
      address: "Brgy Luciano Trece Martires Cavite",
      contact: "(046) 6860856",
      website: "https://www.filipinomd.com/Organizations/general-emilio-aguinaldo-memorial-hospital/"
    },
    {
      region: "Region 4A",
      name: "Laguna Medical Center (LMC HACT Clinic)",
      nature: "Medical Center/ Harm reduction facility",
      address: "J. De Leon St, Santa Cruz, Laguna",
      contact: "(049) 543-3351 / 09178465901",
      website: "https://www.facebook.com/pages/category/Government-Organization/Laguna-Medical-Center-418948045226998/"
    },
    {
      region: "Region 4A",
      name: "Ospital ng Biñan (ONB HIV Treatment Hub)",
      nature: "HIV Treatment Hub",
      address: "Canlalay Bridge, Biñan, Laguna",
      contact: "(049) 511-4119",
      website: "https://www.facebook.com/onbtxhub/"
    },
    {
      region: "Region 4A",
      name: "Quezon Medical Center (Live Positive Wellness Center)",
      nature: "Medical Center",
      address: "Brgy XI, Quezon Avenue, Lucena, Quezon Province",
      contact: "(042) 717-6323 loc. 342",
      website: "https://www.facebook.com/qmclivepositivewellnesshub/"
    },
    
    // Region 4B
    {
      region: "Region 4B",
      name: "Ospital ng Palawan (Red Top Center)",
      nature: "Hospital",
      address: "220 Malvar St. Puerto Princesa City",
      contact: "(048) 434-6864 / (048) 434-2148",
      website: "https://www.facebook.com/redtopcenter/"
    },
    {
      region: "Region 4B",
      name: "Occidental Mindoro Provincial Hospital (ARUGA Clinic)",
      nature: "Hospital",
      address: "Paluan Road, Mamburao, Occidental Mindoro",
      contact: "(043) 711-1116",
      website: "https://www.facebook.com/Occidental-Mindoro-Provincial-Hospital-2140119042965913/"
    },
    {
      region: "Region 4B",
      name: "Oriental Mindoro Provincial Hospital (Purple Rain Clinic)",
      nature: "Hospital",
      address: "Sta. Isabel, Calapan City, Oriental Mindoro",
      contact: "9164691469",
      website: "https://www.facebook.com/PurpleRainClinic/"
    },
      // Region 5
      {
        region: "Region 5",
        name: "Bicol Regional Training and Teaching Hospital",
        nature: "Hospital",
        address: "Rizal St., Legazpi City",
        contact: "(052) 483-0017 loc. 4227",
        website: "https://www.facebook.com/pages/category/Hospital/Bicol-Regional-Training-and-Teaching-Hospital-160257467372254/"
      },
      {
        region: "Region 5",
        name: "Bicol Medical Center",
        nature: "Medical Center",
        address: "BMC Road, Naga, Camarines Sur",
        contact: "(054) 811-7800",
        website: "https://www.facebook.com/BicolMedicalCenter/"
      },
    
      // Region 6
      {
        region: "Region 6",
        name: "Angel Salazar Memorial General Hospital",
        nature: "Hospital",
        address: "Tobias A. Fornier St, San Jose de Buenavista, Antique",
        contact: "(036) 540 7133",
        website: "https://www.facebook.com/asmghantique2020/"
      },
      {
        region: "Region 6",
        name: "Corazon Locsin Montelibano Memorial Regional Hospital",
        nature: "Hospital",
        address: "2nd flr. OPD Bldg. Lacson St. cor Burgos, Bacolod City",
        contact: "(034) 707-2280",
        website: "https://www.facebook.com/pages/Corazon-Locsin-Montelibano-Memorial-Regional-Hospital/119571778061104?rf=196271924289910"
      },
      {
        region: "Region 6",
        name: "Dr. Rafael Tumbokon Memorial Hospital",
        nature: "Hospital",
        address: "Mabini St., Kalibo, Aklan",
        contact: "(036) 268-6299",
        website: "https://www.facebook.com/pages/category/Hospital/Dr-Rafael-S-Tumbokon-Memorial-Hospital-206771842680820/"
      },
      {
        region: "Region 6",
        name: "The Medical City – Iloilo (i-REACT Clinic Iloilo)",
        nature: "Clinic",
        address: "Locsin St., Molo, Iloilo City",
        contact: "(033) 500-1000",
        website: "https://www.facebook.com/themedicalcityiloilo/photos/a.238680312863839/1631324773599379/?type=3"
      },
      {
        region: "Region 6",
        name: "Western Visayas Medical Center",
        nature: "Medical Center",
        address: "Q. Abeto St., Mandurriao, Iloilo City",
        contact: "(033) 321-1631",
        website: "https://www.facebook.com/pages/category/Hospital/Western-Visayas-Medical-Center-1107564752590858/"
      },
    
      // Region 7
      {
        region: "Region 7",
        name: "Cebu Provincial Hospital – Balamban",
        nature: "Hospital",
        address: "Pilapil Street, Balamban, Cebu",
        contact: "9275372900",
        website: "https://www.facebook.com/cphbal/"
      },
      {
        region: "Region 7",
        name: "Cebu Provincial Hospital – Carcar",
        nature: "Hospital",
        address: "Baracca St. Pob. 2 Carcar City, Cebu",
        contact: "(032) 4878334",
        website: "https://www.facebook.com/pages/Carcar-District-Hospital/620734028265146"
      },
      {
        region: "Region 7",
        name: "Chong Hua Hospital – Mandaue (ART Club 802)",
        nature: "Hospital",
        address: "Int'l Mantawi Drive. Rec. Area, Bgy. Subangdaku, Mandaue",
        contact: "(032) 233-8000 loc. 8880",
        website: "https://www.facebook.com/ChongHuaMANDAUE/"
      },
      {
        region: "Region 7",
        name: "Eversley Childs Sanitarium and General Hospital",
        nature: "Hospital",
        address: "Upper Jagobiao Rd, Mandaue City, Cebu",
        contact: "(032) 346 2468",
        website: "https://www.facebook.com/ECSGHOfficial/"
      },
      {
        region: "Region 7",
        name: "Gov. Celestino Gallares Memorial Hospital",
        nature: "Hospital",
        address: "M. Parras St., Tagbilaran City",
        contact: "(038) 411-4868",
        website: "https://www.facebook.com/gcgmhofficial/"
      },
      {
        region: "Region 7",
        name: "Negros Oriental Provincial Hospital",
        nature: "Hospital",
        address: "Real St., Dumaguete City, Negros Oriental",
        contact: "(6335) 225-0950/225-0949",
        website: "https://www.facebook.com/pages/category/Local-Business/Negros-Oriental-Provincial-Hospital-195821653929916/"
      },
      {
        region: "Region 7",
        name: "Talisay District Hospital",
        nature: "Hospital",
        address: "San Isidro, Dakbayan sa Talisay",
        contact: "(032) 273 3226",
        website: "https://www.facebook.com/DOHTDHCebu/"
      },
      {
        region: "Region 7",
        name: "Vicente Sotto Memorial Medical Center",
        nature: "Hospital",
        address: "B. Rodriguez St., Cebu City",
        contact: "(032) 254-4155 / (032) 253-9891 to 96 loc. 102",
        website: "https://www.facebook.com/OfficialVSMMC/"
      },
      {
        region: "Region 7",
        name: "Visayas Community Medical Center (Balay Malingkawasnon)",
        nature: "Medical Center",
        address: "Osmeña Blvd., Cebu City",
        contact: "(032) 253 1901",
        website: "https://www.facebook.com/BalayMalingkawasnonVCMC/"
      },
    
      // Region 8
      {
        region: "Region 8",
        name: "Biliran Provincial Health Office (Reproductive Health Clinic)",
        nature: "Health Clinic",
        address: "Naval, Biliran",
        contact: "(053) 561-5983",
        website: "https://www.facebook.com/PHOhealthpromo/"
      },
      {
        region: "Region 8",
        name: "Eastern Samar Provincial Hospital",
        nature: "Hospital",
        address: "Borongan, Eastern Samar",
        contact: "(055) 560-9869",
        website: "https://www.facebook.com/SPHWeCareWeServe/?rf=501793319856076"
      },
      {
        region: "Region 8",
        name: "Eastern Visayas Regional Medical Center",
        nature: "Medical Center/ Harm reduction facility",
        address: "Magsaysay Blvd., Tacloban City",
        contact: "(053) 321-3121 / (053) 321-3363",
        website: "https://www.facebook.com/evrmcofficial/"
      },
      {
        region: "Region 8",
        name: "Felipe Abrigo Memorial Hospital",
        nature: "Hospital",
        address: "Hillsview, Guiuan, Eastern Samar",
        contact: "(055) 271-2180",
        website: ""
      },
      {
        region: "Region 8",
        name: "Hilongos District Hospital",
        nature: "Hospital",
        address: "CV Alcuiwo St., Hilongos, Leyte",
        contact: "(053) 336-2102",
        website: "https://healthcarephilippines.com/directory/hilongos-district-hospital/"
      },
      {
        region: "Region 8",
        name: "Northern Samar Provincial Hospital",
        nature: "Hospital",
        address: "Catarman, Northern Samar",
        contact: "(055) 500-9770",
        website: "https://www.facebook.com/pages/category/Hospital/Northern-Samar-Provincial-Hospital-647085621970037/"
      },
    
      // Region 9
      {
        region: "Region 9",
        name: "Corazon C. Aquino Memorial Hospital",
        nature: "Hospital",
        address: "Basong Dipolog, Zamboanga del Norte",
        contact: "(065) 212-5555",
        website: "https://www.facebook.com/pages/Corazon-C-Aquino-Hospital/577058175766527"
      },
      {
        region: "Region 9",
        name: "Margosatubig Regional Hospital",
        nature: "Medical Center",
        address: "F. Nightingale St, Margosatubig, 7035 ZDS",
        contact: "09177001500/ 09452954381",
        website: "https://www.facebook.com/margosatubigreghospital/"
      },
      {
        region: "Region 9",
        name: "Zamboanga City Medical Center",
        nature: "Medical Center",
        address: "Dr. Evangelista St., Sta. Catalina, Zamboanga City",
        contact: "(062) 991-2934",
        website: "https://www.facebook.com/zcmcdoh9/"
      },
    
      // Region 10
      {
        region: "Region 10",
        name: "Mayor Hilarion A. Ramiro Sr. Regional and Teaching Hospital",
        nature: "Hospital",
        address: "Bacolod , 7200 Ozamis City , Misamis Occidental",
        contact: "(088) 521 0022",
        website: "https://www.facebook.com/MHARSMedicalCenter/"
      },
      {
        region: "Region 10",
        name: "Northern Mindanao Medical Center",
        nature: "Medical Center/ Harm reduction facility",
        address: "Provincial Capitol Compound, Cagayan de Oro City",
        contact: "(082) 856-4147",
        website: "https://m.facebook.com/profile.php?id=198333683529908"
      },
    
      // Region 11
      {
        region: "Region 11",
        name: "Davao Doctors Hospital (ARTU)",
        nature: "Hospital",
        address: "118 E Quirino Avenue, Poblacion District, Davao City",
        contact: "(082) 222 8000",
        website: "https://www.ddh.com.ph/"
      },
      {
        region: "Region 11",
        name: "Davao Regional Medical Center (RED STAR Clinic)",
        nature: "Medical Center",
        address: "Apokon, Tagum City, Davao del Norte",
        contact: "(084) 400-3347 / 09239598931",
        website: "https://www.facebook.com/redstarclinic/"
      },
      {
        region: "Region 11",
        name: "Southern Philippines Medical Center",
        nature: "Medical Center/ Harm reduction facility",
        address: "J. P. Laurel St., Bajada, Davao City",
        contact: "(082) 227-2731 loc. 5140 / (082) 321-7061",
        website: "https://www.facebook.com/SouthernPhilippinesMedicalCenter/"
      },
    
      // Region 12
      {
        region: "Region 12",
        name: "South Cotabato Provincial Hospital (IPHO-SCPH HACT Clinic )",
        nature: "Hospital",
        address: "Aguinaldo St., Koronadal City, South Cotabato",
        contact: "(083) 228-4571",
        website: "https://www.facebook.com/pg/socotipho/posts/"
      },
    
      // Region CAR
      {
        region: "Region CAR",
        name: "Baguio General Hospital and Medical Center",
        nature: "Medical Center",
        address: "Governor Pack Road., Baguio City",
        contact: "(074) 442-4216 loc. 381 / 09155816480",
        website: "https://www.facebook.com/bghmcofficialbaguio/"
      },
    
      // Region CARAGA
      {
        region: "Region CARAGA",
        name: "Adela Serra Ty Memorial Medical Center (SDS Wellness Ctr.)",
        nature: "Medical Center",
        address: "Capitol Hills, Telaje, Tandag, Surigao del Sur",
        contact: "(086) 211-4306",
        website: "https://www.facebook.com/pages/category/Hospital/Adela-Serra-Ty-Memorial-Medical-Center-796940513723723/"
      },
      {
        region: "Region CARAGA",
        name: "Butuan Medical Center (Pallative and Wellness Care Center)",
        nature: "Medical Center",
        address: "Km 5 Baan, Butuan City",
        contact: "9173208799",
        website: "https://www.facebook.com/caraganonicare/posts/hiv-testing-is-free-and-confidential-get-tested-and-know-your-hiv-statuswith-fre/684548958416816/"
      },
      {
        region: "Region CARAGA",
        name: "CARAGA Regional Hospital (OP Wellness Center)",
        nature: "Hospital",
        address: "Rizal St. National Road, Surigao City",
        contact: "(086) 826-0568 / 09173068186",
        website: "https://www.facebook.com/caragarh/"
      },
      {
        region: "Region CARAGA",
        name: "Democrito O. Plaza Memorial Hospital (Heart Room)",
        nature: "Medical Center",
        address: "P2, Patin-ay, Prosperidad, Agusan del Sur",
        contact: "9274698162",
        website: "https://www.facebook.com/DOPMH/"
      },
    
      // Region NCR
      {
        region: "Region NCR",
        name: "Asian Hospital and Medical Center",
        nature: "Medical Center",
        address: "2205 Civic Drive, Filinvest City, Alabang",
        contact: "(02) 771 9000 loc 8154/ 09989641964",
        website: "https://www.facebook.com/AsianHospitalPH/"
      },
      {
        region: "Region NCR",
        name: "Dr. Jose N. Rodriguez Memorial Hospital",
        nature: "Hospital",
        address: "St. Joseph Avenue, Tala Caloocan",
        contact: "09209824758/ 09253547547",
        website: "https://www.facebook.com/officialtalahospital/"
      },
      {
        region: "Region NCR",
        name: "Makati Medical Center",
        nature: "Medical Center",
        address: "#2 Amorsolo St., Legaspi Village, Makati City",
        contact: "(02) 888-8999 loc. 2134 (CTTM) / 09178014314",
        website: "https://www.facebook.com/IamMakatiMed/photos/you-can-be-physically-healthy-but-still-have-hiv-thats-why-its-important-to-know/2499110216836750/"
      },
      {
        region: "Region NCR",
        name: "Manila Doctors Hospital",
        nature: "Hospital",
        address: "667 United Nations Avenue, Ermita Manila",
        contact: "(02) 558-0888 loc. 4480",
        website: "https://www.facebook.com/maniladoctorshospital/"
      },
      {
        region: "Region NCR",
        name: "Mary Johnston Hospital",
        nature: "Hospital",
        address: "1221 Juan Nolasco Street, Tondo Manila",
        contact: "(02) 245-4021 loc 385/412",
        website: "https://www.facebook.com/MJHhealingtogether/"
      },
      {
        region: "Region NCR",
        name: "Philippine General Hospital (SAGIP – Unit)",
        nature: "Hospital",
        address: "Taft Ave., Manila",
        contact: "(02) 554-8400 loc. 3249",
        website: "https://www.facebook.com/Sagip.unit/"
      },
      {
        region: "Region NCR",
        name: "Quezon City General Hospital",
        nature: "Hospital",
        address: "Seminary Road, EDSA",
        contact: "(02) 863-0800",
        website: "https://www.facebook.com/quezoncitygeneralhospitalofficial/"
      },
      {
        region: "Region NCR",
        name: "Research Institute for Tropical Medicine",
        nature: "",
        address: "Filinvest Corporate City, Alabang, Muntinlupa City",
        contact: "(02) 807-2628 loc. 332",
        website: "https://www.facebook.com/RITMPH/"
      },
      {
        region: "Region NCR",
        name: "Rizal Medical Center",
        nature: "Medical Center",
        address: "Pasig Blvd, Pasig City",
        contact: "09361944238/ 0932601 9341",
        website: "https://www.facebook.com/rmc.doh.gov.ph/?rf=337105586379977"
      },
      {
        region: "Region NCR",
        name: "San Lazaro Hospital (H4 OPD Clinic)",
        nature: "Hospital",
        address: "Quiricada St., Sta. Cruz, Manila",
        contact: "(02) 310-3128",
        website: "https://m.facebook.com/PLHIVResponse/posts/2259707134334414"
      },
      {
        region: "Region NCR",
        name: "St. Luke's Medical Center – Global City (Room 1276)",
        nature: "Medical Center",
        address: "Rizal Drive cor. 32nd & 5th Ave.,Taguig City",
        contact: "(02) 789-7700",
        website: "https://www.facebook.com/StLukesPH/?rf=302594503264066"
      },
      {
        region: "Region NCR",
        name: "Sta. Ana Hospital",
        nature: "Hospital",
        address: "New Panaderos St., Sta. Ana, Manila",
        contact: "(02) 516-6790",
        website: "https://www.facebook.com/Sta-Ana-Hospital-122115504470552/"
      },
      {
        region: "Region NCR",
        name: "The Medical City – Ortigas (i-REACT Clinic Pasig)",
        nature: "Clinic",
        address: "Ortigas Ave., Pasig City",
        contact: "(02) 988-1000 loc. 6765",
        website: "https://www.facebook.com/TheMedicalCity/posts/2650733521603511"
      }
    ];
  

  // Get unique regions
  const regions = Array.from(new Set(establishments.map(est => est.region)))

  // Filter establishments based on active region and search query
  const filteredEstablishments = establishments.filter(est => {
    const matchesRegion = activeRegion ? est.region === activeRegion : true
    const matchesSearch = est.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         est.address.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesRegion && matchesSearch
  })

  // Toggle region expansion
  const toggleRegion = (region: string) => {
    setActiveRegion(activeRegion === region ? null : region)
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-[#e22226] text-white">
        <NavBar />
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center">HIV Care Services</h1>
          <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
            From testing to treatment, we provide comprehensive information about HIV care services and support programs
            available to you.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Step-by-Step Guide */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Your Journey: From Testing to Treatment
            </h2>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-full h-40 w-40 flex items-center justify-center mx-auto">
                    <span className="text-[#e22226] text-6xl font-bold">1</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">Get Tested</h3>
                  <p className="text-gray-700 mb-4">
                    The first step is knowing your status. HIV testing is quick, confidential, and widely available. You
                    can get tested at healthcare providers, community health centers, and even through home testing
                    kits.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Results are typically available in 20-30 minutes for rapid tests</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Testing is confidential and often free or low-cost</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>No appointment necessary at many locations</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-full h-40 w-40 flex items-center justify-center mx-auto">
                    <span className="text-[#e22226] text-6xl font-bold">2</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">Connect to Care</h3>
                  <p className="text-gray-700 mb-4">
                    If you test positive, you'll be connected to healthcare providers who specialize in HIV care. They
                    will help you understand your diagnosis and develop a treatment plan.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Counselors are available to provide emotional support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Case managers help navigate healthcare systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Financial assistance programs are available</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-full h-40 w-40 flex items-center justify-center mx-auto">
                    <span className="text-[#e22226] text-6xl font-bold">3</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">Start Treatment</h3>
                  <p className="text-gray-700 mb-4">
                    Modern HIV treatments are highly effective. Antiretroviral therapy (ART) can reduce the amount of
                    HIV in your body to undetectable levels, allowing you to live a long, healthy life.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>One pill once a day is common for many people</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Minimal side effects with modern medications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Undetectable = Untransmittable (U=U)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-full h-40 w-40 flex items-center justify-center mx-auto">
                    <span className="text-[#e22226] text-6xl font-bold">4</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">Stay Connected</h3>
                  <p className="text-gray-700 mb-4">
                    Regular healthcare visits and community support are important parts of living well with HIV. Support
                    groups, counseling, and other services can help you thrive.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Connect with others living with HIV</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Access mental health services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Learn about nutrition, exercise, and overall wellness</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Care Establishments Section */}
          <div className="max-w-6xl mx-auto mt-24 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              HIV Care Establishments Directory
            </h2>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
              Below is a comprehensive list of medical facilities that provide HIV testing, treatment, and support services across different regions of the Philippines.
            </p>

            {/* Search Bar */}
            <div className="mb-8 relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search by name or location..."
                className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e22226] focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>

            {/* Establishments Table */}
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full py-2 align-middle">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  {regions.map((region) => (
                    <div key={region} className="border-b border-gray-200 last:border-b-0">
                      {/* Region Header (Collapsible) */}
                      <button
                        onClick={() => toggleRegion(region)}
                        className="w-full bg-gray-50 px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 focus:outline-none"
                      >
                        <span className="font-semibold text-lg">{region}</span>
                        {activeRegion === region ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>

                      {/* Establishments in this region */}
                      {activeRegion === region && (
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                                Establishment
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">
                                Nature
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                                Address
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">
                                Contact Number
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">
                                Website
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {filteredEstablishments
                              .filter(est => est.region === region)
                              .map((est, index) => (
                                <tr key={`${est.region}-${index}`} className="hover:bg-gray-50">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {est.name}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {est.nature}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-500">
                                    {est.address}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {est.contact}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                                    <a 
                                      href={est.website} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="flex items-center hover:underline"
                                    >
                                      Visit
                                      <ExternalLink className="ml-1" size={14} />
                                    </a>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-24">
            <h2 className="text-2xl font-bold mb-4">Ready to Take the First Step?</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Whether you're seeking testing, treatment, or support, we're here to help you navigate your journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/#get-tested"
                className="bg-[#e22226] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                Find Testing Locations
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}