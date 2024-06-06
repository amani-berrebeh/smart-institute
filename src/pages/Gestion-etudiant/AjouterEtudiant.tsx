import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Dropzone from "react-dropzone";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SimpleBar from "simplebar-react";
import country from "Common/country";
import Swal from "sweetalert2";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { useSelector } from "react-redux";

type Wilaya =
  | "اريانة"
  | "بن عروس"
  | "باجة"
  | "بنزرت"
  | "قابس"
  | "قفصة"
  | "جندوبة"
  | "قبلي"
  | "الكاف"
  | "القيروان"
  | "مدنين"
  | "المهدية"
  | "المنستير"
  | "نابل"
  | "صفاقس"
  | "سليانة"
  | "سوسة"
  | "تطاوين"
  | "توزر"
  | "تونس"
  | "زغوان"
  | "منوبة"
  | "القصرين"
  | "سيدي بوزيد";

const wilayaOptions: Wilaya[] = [
  "اريانة",
  "بن عروس",
  "باجة",
  "بنزرت",
  "قابس",
  "قفصة",
  "جندوبة",
  "قبلي",
  "الكاف",
  "القيروان",
  "مدنين",
  "المهدية",
  "المنستير",
  "نابل",
  "صفاقس",
  "سليانة",
  "سوسة",
  "تطاوين",
  "توزر",
  "تونس",
  "زغوان",
  "منوبة",
  "القصرين",
  "سيدي بوزيد",
];

type DelegationOptions = {
  [key in Wilaya]: string[];
};

const delegationOptions: DelegationOptions = {
  اريانة: [
    "اريانة المدينة",
    "سكرة",
    "رواد",
    "قلعة الأندلس",
    "سيدي ثابت",
    "حي التضامن",
    "المنيهلة",
  ],
  "بن عروس": [
    "حمام الأنف",
    "بن عروس",
    "المدينة الجديدة",
    "المروج",
    "حمام الشط",
    "بومهل البساتين",
    "الزهراء",
    "رادس",
    "مقرين",
    "المحمدية",
    "المحمدية",
    "مرناق",
  ],
  باجة: [
    "باجة الشمالية",
    "باجة الجنوبية",
    "تبرسق",
    "نفزة",
    "تيبار",
    "تستور",
    "قبلاط",
    "مجاز الباب",
  ],
  بنزرت: [
    "بنزرت الشمالية",
    "جرزونة",
    "بنزرت الجنوبية",
    "سجنان",
    "جومين",
    "ماطر",
    "غزالة",
    "منزل بورقيبة",
    "تينجة",
    "أوتيك",
    "غار الملح",
    "منزل جميل",
    "العالية",
    "رأس الجبل",
  ],
  قابس: [
    "قابس المدينة",
    "قابس الغربية",
    "قابس الجنوبية",
    "غنوش",
    "المطوية",
    "منزل الحبيب",
    "الحامة",
    "مطماطة",
    "مطماطة الجديدة",
    "مارث",
    "دخيلة توجان",
  ],
  قفصة: [
    "قفصة الشمالية",
    "سيدي عيش",
    "القصر",
    "قفصة الجنوبية",
    "أم العرائس",
    "سيدي بوبكر",
    "الرديف",
    "المتلوي",
    "المظيلة",
    "القطار",
    "بالخير",
    "زنوش",
    "زنوش",
  ],
  جندوبة: [
    "جندوبة",
    "جندوبة الشمالية",
    "بوسالم",
    "طبرقة",
    "عين دراهم",
    "فرنانة",
    "غار الدماء",
    "وادي مليز",
    "بلطة بوعوان",
  ],
  قبلي: [
    "قبلي الجنوبية",
    "قبلي الشمالية",
    "سوق الأحد",
    "دوز الشمالية",
    "دوز الجنوبية",
    "الفوار",
    "رجيم معتوق",
  ],
  الكاف: [
    "الكاف الغربية",
    "الكاف الشرقية",
    "نبر",
    "الطويرف",
    "ساقية سيدي يوسف",
    "تاجروين",
    "القلعة الخصبة",
    "الجريصة",
    "القصور",
    "الدهماني",
    "السرس",
  ],
  القيروان: [
    "القيروان الشمالية",
    "القيروان الجنوبية",
    "الشبيكة",
    "السبيخة",
    "الوسلاتية",
    "حفوز",
    "العلا",
    "حاجب العيون",
    "نصر الله",
    "الشراردة",
    "بوحجلة",
    "عين جلولة",
    "منزل المهيري",
  ],
  مدنين: [
    "مدنين الشمالية",
    "مدنين الجنوبية",
    "بني خداش",
    "بن قردان",
    "جرجيس",
    "جربة حومة السوق",
    "جربة ميدون",
    "جربة اجيم",
    "سيدي مخلوف",
  ],
  المهدية: [
    "المهدية",
    "بومرداس",
    "أولاد الشامخ",
    "هبيرة",
    "السواسي",
    "الجم",
    "الشابة",
    "ملولش",
    "قصور الساف",
  ],
  المنستير: [
    "المنستير",
    "الوردانين",
    "الساحلين",
    "زرمدين",
    "بني حسان",
    "جمال",
    "بنبلة",
    "المكنين",
    "البقالطة",
    "طبلبة",
    "قصر هلال",
    "قصيبة الميدوني",
    "صيادة لمطة بوحجر",
  ],
  نابل: [
    "نابل",
    "دار شعبان الفهري",
    "بني خيار",
    "قربة",
    "منزل تميم",
    "الميدة",
    "قليبية",
    "حمام الأغزاز",
    "الهوارية",
    "تاكسلة",
    "سليمان",
    "منزل بوزلفة",
    "بني خلاد",
    "قرمبالية",
    "بوعرقوب",
    "الحمامات",
  ],
  صفاقس: [
    "صفاقس المدينة",
    "صفاقس الغربية",
    "ساقية الزيت",
    "صفاقس الجنوبية",
    "ساقية الداير",
    "طينة",
    "عقارب",
    "جبنيانة",
    "العامرة",
    "الحنشة",
    "منزل شاكر",
    "الغريبة",
    "بئر علي بن خليفة",
    "محرس",
    "الصخيرة",
    "قرقنة",
  ],
  سليانة: [
    "سليانة الجنوبية",
    "سليانة الشمالية",
    "بوعرادة",
    "قعفور",
    "العروسة",
    "الكريب",
    "بورويس",
    "مكثر",
    "الروحية",
    "كسرى",
    "برقو",
  ],
  سوسة: [
    "سوسة المدينة",
    "الزاوية القصيبة الثريات",
    "سوسة الرياض",
    "سوسة جوهرة",
    "سوسة سيدي عبد الحميد",
    "حمام سوسة",
    "أكودة",
    "القلعة الكبرى",
    "سيدي بو علي",
    "هرقلة",
    "النفيضة",
    "بوفيشة",
    "كندار",
    "سيدي الهاني",
    "مساكن",
    "القلعة الصغرى",
  ],
  تطاوين: [
    "تطاوين الشمالية",
    "تطاوين الجنوبية",
    "الصمار",
    "البئر الأحمر",
    "غمراسن",
    "ذهيبة",
    "رمادة",
    "بني مهيرة",
  ],
  توزر: ["توزر", "دقاش", "تمغزة", "نفطة", "حزوة", "حامة الجريد"],
  تونس: [
    "قرطاج",
    "المدينة",
    "باب البحر",
    "باب سويقة",
    "العمران",
    "العمران الأعلى",
    "التحرير",
    "المنزه",
    "حي الخضراء",
    "باردو",
    "السيجومي",
    "الزهور",
    "الحرائرية",
    "سيدي حسين",
    "الوردية",
    "الكبارية",
    "سيدي البشير",
    "جبل الجلود",
    "حلق الوادي",
    "الكرم",
    "المرسى",
  ],
  زغوان: ["زغوان", "الزريبة", "بئر مشارقة", "الفحص", "الناظور", "صواف"],
  منوبة: [
    "منوبة",
    "وادي الليل",
    "طبربة",
    "البطان",
    "الجديدة",
    "المرناقية",
    "برج العامري",
    "دوار هيشر",
  ],
  القصرين: [
    "القصرين الشمالية",
    "القصرين الجنوبية",
    "الزهور",
    "حاسي الفريد",
    "سبيطلة",
    "سبيبة",
    "جدليان",
    "العيون",
    "تالة",
    "حيدرة",
    "فوسانة",
    "ماجل بالعباس",
  ],
  "سيدي بوزيد": [
    "سيدي بوزيد الغربية",
    "سيدي بوزيد الشرقية",
    "سبالة أولاد عسكر",
    "بئر الحفي",
    "سيدي علي بن عون",
    "منزل بوزيان",
    "المكناسي",
    "سوق الجديد",
    "المزونة",
    "الرقاب",
    "السعيدة",
    "أولاد حفوز",
  ],
};

const AjouterEtudiant = () => {
  document.title = " Ajouter Etudiant | Application Smart Institute";
  const navigate = useNavigate();
  const [selectedFiles, setselectedFiles] = useState([]);
  // Mutation to create account

  // Account's Values and Functions
  // groupId: "65def391137b93f458f52c1f",

  const [seletedCountry, setseletedCountry] = useState<any>({});
  const [seletedCountry1, setseletedCountry1] = useState<any>({});

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleCheckboxChange = (option: string) => {
    setSelectedOption((prev) => (prev === option ? "" : option));
  };

  const fileInputs: { [key: string]: string[] } = {
    جديد: [],
    راسب: ["بطاقة أعداد السنة الفارطة"],
    نقلة: ["بطاقة تعيين", "شهادة مغادرة", "بطاقة أعداد السنة الفارطة"],
    "إعادة توجيه": ["وثيقة إعادة توجيه", "بطاقة أعداد السنة الفارطة"],
    "إعادة إدماج": ["وثيقة إعادة ادماج"],
    "ترسيم إستثنائي": [
      "بطاقة أعداد السنة الفارطة",
      "مطلب كتابي",
      "وصل خلاص التسجيل كاملاً",
    ],
    "إجازة ثانية": ["بطاقة تعيين", "بطاقة أعداد السنة الفارطة"],
  };
  const [selectedWilaya, setSelectedWilaya] = useState<Wilaya | "">("");
  const [selectedDelegation, setSelectedDelegation] = useState<string>("");

  const handleWilayaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWilaya(event.target.value as Wilaya);
    setSelectedDelegation("");
  };

  const handleDelegationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDelegation(event.target.value);
  };
  // change gender

  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  //change civil status
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const selectChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedStatus(value);
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  //change station
  const [selectedStation, setSelectedStation] = useState<string>("");

  const selectChangeStation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedStation(value);
  };

  //change group
  const [selectedGroup, setSelectedGroup] = useState<string>("");

  // const selectChangeGroup = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const value = event.target.value;
  //   setSelectedGroup(value);
  // };

  const handleDateChange = (selectedDates: Date[]) => {
    // Assuming you only need the first selected date
    setSelectedDate(selectedDates[0]);
  };

  const notify = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Account has been created successfully",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  function handleAcceptedFiles(files: any) {
    files.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /* Formats the size */
  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  function convertToBase64(
    file: File
  ): Promise<{ base64Data: string; extension: string }> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const base64String = fileReader.result as string;
        // const base64Data = base64String.split(",")[1]; // Extract only the Base64 data
        const [, base64Data] = base64String.split(","); // Extract only the Base64 data
        const extension = file.name.split(".").pop() ?? ""; // Get the file extension
        resolve({ base64Data, extension });
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
      fileReader.readAsDataURL(file);
    });
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <Card.Header>
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-sm">
                          <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                            <i className="bi bi-person-lines-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="card-title">
                          معلومات شخصية / Information Personnel
                        </h5>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body></Card.Body>
                  <div className="mb-3">
                    <Form className="tablelist-form">
                      <input type="hidden" id="id-field" />
                      <Row>
                        <div className="text-center mb-3">
                          <div
                            className="position-relative d-inline-block"
                            style={{ marginBottom: "30px" }}
                          >
                            <div className="position-absolute top-100 start-100 translate-middle">
                              <label
                                htmlFor="photosBase64String"
                                className="mb-0"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                title="Select Employee Picture"
                              >
                                <span className="avatar-xs d-inline-block">
                                  <span className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                    <i className="ri-image-fill"></i>
                                  </span>
                                </span>
                              </label>
                              <input
                                className="d-none"
                                type="file"
                                name="photosBase64String"
                                id="photosBase64String"
                                accept="image/*"
                              />
                            </div>
                            <div className="avatar-xl">
                              <div className="avatar-title bg-light rounded-4">
                                <img
                                  // alt={formData.firstName}
                                  id="photosBase64String"
                                  className="avatar-xl h-auto rounded-4 object-fit-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <Row>
                          {/* First Name  == Done */}
                          <Col lg={3}>
                            <div className="mb-3">
                              <Form.Label htmlFor="fullName">
                                Prénom (en français)
                              </Form.Label>
                              <Form.Control
                                type="text"
                                id="firstName"
                                placeholder=""
                                // required
                              />
                            </div>
                          </Col>
                          {/* Last Name == Done */}
                          <Col lg={3}>
                            <div className="mb-3">
                              <Form.Label htmlFor="lastName">
                                Nom (en français)
                              </Form.Label>
                              <Form.Control
                                type="text"
                                id="lastName"
                                placeholder=""
                              />
                            </div>
                          </Col>
                          <Col lg={3}>
                            <div
                              className="mb-3"
                              style={{ direction: "rtl", textAlign: "right" }}
                            >
                              <Form.Label
                                htmlFor="lastName"
                                style={{ direction: "rtl", textAlign: "right" }}
                              >
                                اللقب (بالعربية)
                              </Form.Label>
                              <Form.Control
                                type="text"
                                id="lastName"
                                placeholder=""
                                dir="rtl"
                              />
                            </div>
                          </Col>
                          <Col lg={3}>
                            <div
                              className="mb-3"
                              style={{ direction: "rtl", textAlign: "right" }}
                            >
                              <Form.Label
                                htmlFor="fullName"
                                style={{ direction: "rtl", textAlign: "right" }}
                              >
                                الإسم (بالعربية)
                              </Form.Label>
                              <Form.Control
                                type="text"
                                id="firstName"
                                placeholder=""
                                dir="rtl"
                                // required
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={3}>
                            <div
                              className="mb-3"
                              style={{ direction: "rtl", textAlign: "right" }}
                            >
                              <Form.Label> الجنسية/ Nationalité </Form.Label>
                              <Dropdown>
                                <Dropdown.Toggle
                                  as="input"
                                  style={{
                                    backgroundImage: `url(${
                                      seletedCountry1.flagImg &&
                                      seletedCountry1.flagImg
                                    })`,
                                  }}
                                  className="form-control rounded-end flag-input form-select"
                                  placeholder="اختر دولة"
                                  readOnly
                                  defaultValue={seletedCountry1.countryName}
                                ></Dropdown.Toggle>
                                <Dropdown.Menu
                                  as="ul"
                                  className="list-unstyled w-100 dropdown-menu-list mb-0"
                                >
                                  <SimpleBar
                                    style={{ maxHeight: "220px" }}
                                    className="px-3"
                                  >
                                    {(country || []).map(
                                      (item: any, key: number) => (
                                        <Dropdown.Item
                                          as="li"
                                          onClick={() =>
                                            setseletedCountry1(item)
                                          }
                                          key={key}
                                          className="dropdown-item d-flex"
                                        >
                                          <div className="flex-shrink-0 me-2">
                                            <Image
                                              src={item.flagImg}
                                              alt="country flag"
                                              className="options-flagimg"
                                              height="20"
                                            />
                                          </div>
                                          <div className="flex-grow-1">
                                            <div className="d-flex">
                                              <div className="country-name me-1">
                                                {item.countryName}
                                              </div>
                                              <span className="countrylist-codeno text-muted">
                                                {item.countryCode}
                                              </span>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                      )
                                    )}
                                  </SimpleBar>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </Col>

                          <Col lg={3}>
                            <div
                              className="mb-3"
                              style={{ direction: "rtl", textAlign: "right" }}
                            >
                              <Form.Label
                                htmlFor="fullName"
                                style={{ direction: "rtl", textAlign: "right" }}
                              >
                                مكان الولادة (بالعربية)
                              </Form.Label>
                              <Form.Control
                                type="text"
                                id="firstName"
                                placeholder=""
                                dir="rtl"
                                // required
                              />
                            </div>
                          </Col>
                          <Col lg={3}>
                            <div
                              className="mb-3"
                              style={{ direction: "rtl", textAlign: "right" }}
                            >
                              <Form.Label
                                htmlFor="fullName"
                                style={{ direction: "rtl", textAlign: "right" }}
                              >
                                مكان الولادة (بالفرنسية)
                              </Form.Label>
                              <Form.Control
                                type="text"
                                id="firstName"
                                placeholder=""
                                dir="rtl"
                                // required
                              />
                            </div>
                          </Col>

                          <Col lg={3}>
                            <div
                              className="mb-3"
                              style={{ direction: "rtl", textAlign: "right" }}
                            >
                              <Form.Label htmlFor="dateOfBirth">
                                تاريخ الولادة
                              </Form.Label>
                              <Flatpickr
                                value={selectedDate!}
                                onChange={handleDateChange}
                                className="form-control flatpickr-input"
                                placeholder="اختر التاريخ"
                                options={{
                                  dateFormat: "d M, Y",
                                }}
                                id="dateOfBirth"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row
                          style={{
                            direction: "rtl",
                            textAlign: "right",
                          }}
                        >
                          <Col lg={3}>
                            <div className="mb-3">
                              <Form.Label htmlFor="civilStatus">
                                الحالة المدنية
                              </Form.Label>
                              <select
                                className="form-select text-muted"
                                name="civilStatus"
                                id="civilStatus"
                                // required
                                onChange={selectChangeStatus}
                              >
                                <option value="">الحالة</option>
                                <option value="Married">متزوج</option>
                                <option value="Single">أعزب</option>
                                <option value="Divorced">مطلق</option>
                                <option value="Widowed">أرمل</option>
                              </select>
                            </div>
                          </Col>

                          <Col lg={3}>
                            <div className="mb-3">
                              <label htmlFor="gender" className="form-label">
                                الجنس
                              </label>
                              <select
                                className="form-select text-muted"
                                name="gender"
                                id="gender"
                                // required
                                // value={formData.gender}
                                onChange={selectChange}
                              >
                                <option value="">الجنس</option>
                                <option value="male">ذكر</option>
                                <option value="female">أنثى</option>
                              </select>
                            </div>
                          </Col>
                        </Row>
                        <Col lg={12}>
                          <Card.Header>
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar-sm">
                                  <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                    <i className="bi bi-person-vcard-fill"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="card-title">
                                  الوثائق المطلوبة / Documents naicessaires
                                  format image (jpg, png)
                                </h5>
                              </div>
                            </div>
                          </Card.Header>
                          <Card.Body>
                            <Row>
                              <Col lg={3}>
                                <div
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <label htmlFor="login" className="form-label">
                                    Numéro de passeport / رقم بطاقة التعريف
                                    الوطنية
                                  </label>
                                  <Form.Control
                                    type="text"
                                    id="login"
                                    placeholder=""

                                    // required
                                  />
                                </div>
                              </Col>

                              <Col lg={3}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <label
                                    htmlFor="legalcardBase64String"
                                    className="form-label"
                                  >
                                    CIN (Face 1) / بطاقة التعريف الوطنية الوجه
                                    الأول
                                  </label>
                                  <Form.Control
                                    name="legalcardBase64String"
                                    type="file"
                                    id="legalcardBase64String"
                                    accept=".pdf"
                                    placeholder="Choose File"
                                    className="text-muted"

                                    // required
                                  />
                                </div>
                              </Col>
                              <Col lg={3}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <label
                                    htmlFor="legalcardBase64String"
                                    className="form-label"
                                  >
                                    CIN (Face 2) / بطاقة التعريف الوطنية الوجه
                                    الثاني
                                  </label>
                                  <Form.Control
                                    name="legalcardBase64String"
                                    type="file"
                                    id="legalcardBase64String"
                                    accept=".pdf"
                                    placeholder="Choose File"
                                    className="text-muted"

                                    // required
                                  />
                                </div>
                              </Col>
                              <Col lg={3}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <label
                                    htmlFor="legalcardBase64String"
                                    className="form-label"
                                  >
                                    Fiche de Paiement (inscription.tn) / وصل
                                    التسجيل
                                  </label>
                                  <Form.Control
                                    name="legalcardBase64String"
                                    type="file"
                                    id="legalcardBase64String"
                                    accept=".pdf"
                                    placeholder="Choose File"
                                    className="text-muted"

                                    // required
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Col>

                        <Col lg={12}>
                          <Card.Header>
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar-sm">
                                  <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                    <i className="bi bi-geo-alt-fill"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="card-title">
                                  معلومات عنوان الطالب / Informations sur
                                  l'adresse de l'étudiant
                                </h5>
                              </div>
                            </div>
                          </Card.Header>
                          <Card.Body>
                            <Row>
                              <Col lg={3}>
                                <div className="mb-3">
                                  <Form.Label htmlFor="lastName">
                                    Adresse (en français)
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    id="lastName"
                                    placeholder=""
                                    dir="rtl"
                                  />
                                </div>
                              </Col>
                              <Col lg={3}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <Form.Label
                                    htmlFor="fullName"
                                    style={{
                                      direction: "rtl",
                                      textAlign: "right",
                                    }}
                                  >
                                    العنوان (بالعربية)
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    id="firstName"
                                    placeholder=""
                                    dir="rtl"
                                    // required
                                  />
                                </div>
                              </Col>
                              <Col lg={2}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <Form.Label
                                    htmlFor="fullName"
                                    style={{
                                      direction: "rtl",
                                      textAlign: "right",
                                    }}
                                  >
                                    الترقيم البريدي
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    id="firstName"
                                    placeholder=""
                                    dir="rtl"
                                    // required
                                  />
                                </div>
                              </Col>

                              <Col lg={2}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <label
                                    htmlFor="المعتمدية"
                                    className="form-label"
                                  >
                                    المعتمدية
                                  </label>
                                  <select
                                    className="form-select text-muted"
                                    name="المعتمدية"
                                    id="المعتمدية"
                                    value={selectedDelegation}
                                    onChange={handleDelegationChange}
                                    disabled={!selectedWilaya} // Disable if no Wilaya is selected
                                  >
                                    <option value="">إخترالمعتمدية</option>
                                    {selectedWilaya &&
                                      delegationOptions[selectedWilaya].map(
                                        (delegation, index) => (
                                          <option
                                            key={index}
                                            value={delegation}
                                          >
                                            {delegation}
                                          </option>
                                        )
                                      )}
                                  </select>
                                </div>
                              </Col>
                              <Col lg={2}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <label
                                    htmlFor="الولاية"
                                    className="form-label"
                                  >
                                    الولاية
                                  </label>
                                  <select
                                    className="form-select text-muted"
                                    name="الولاية"
                                    id="الولاية"
                                    value={selectedWilaya}
                                    onChange={handleWilayaChange}
                                  >
                                    <option value="">إخترالولاية</option>
                                    {wilayaOptions.map((wilaya, index) => (
                                      <option key={index} value={wilaya}>
                                        {wilaya}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </Col>
                            </Row>
                            <Row
                              style={{
                                direction: "rtl",
                                textAlign: "right",
                              }}
                            >
                              <Col lg={3}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <Form.Label
                                    htmlFor="fullName"
                                    style={{
                                      direction: "rtl",
                                      textAlign: "right",
                                    }}
                                  >
                                    رقم هاتف الطالب
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    id="firstName"
                                    placeholder=""
                                    dir="rtl"
                                    // required
                                  />
                                </div>
                              </Col>
                              <Col lg={3}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <Form.Label
                                    htmlFor="email"
                                    style={{
                                      direction: "rtl",
                                      textAlign: "right",
                                    }}
                                  >
                                    البريد الإلكتروني
                                  </Form.Label>
                                  <Form.Control
                                    type="email"
                                    id="email"
                                    placeholder=""
                                    // required
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Col>

                        <Col lg={12}>
                          <Card.Header>
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar-sm">
                                  <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                    <i className="bi bi-people-fill"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="card-title">
                                  معلومات ولي الطالب / Informations du tuteur de
                                  l'étudiant
                                </h5>
                              </div>
                            </div>
                          </Card.Header>
                          <Card.Body>
                            <Row>
                              <Col lg={3}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <Form.Label
                                    htmlFor="lastName"
                                    style={{
                                      direction: "rtl",
                                      textAlign: "right",
                                    }}
                                  >
                                    رقم هاتف الولي
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    id="lastName"
                                    placeholder=""
                                    dir="rtl"
                                  />
                                </div>
                              </Col>

                              <Col lg={3}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <Form.Label
                                    htmlFor="fullName"
                                    style={{
                                      direction: "rtl",
                                      textAlign: "right",
                                    }}
                                  >
                                    إسم الأم و لقبها
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    id="firstName"
                                    placeholder=""
                                    dir="rtl"
                                    // required
                                  />
                                </div>
                              </Col>

                              <Col lg={3}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <Form.Label
                                    htmlFor="lastName"
                                    style={{
                                      direction: "rtl",
                                      textAlign: "right",
                                    }}
                                  >
                                    مهنة الأب
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    id="lastName"
                                    placeholder=""
                                    dir="rtl"
                                  />
                                </div>
                              </Col>
                              <Col lg={3}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <Form.Label
                                    htmlFor="fullName"
                                    style={{
                                      direction: "rtl",
                                      textAlign: "right",
                                    }}
                                  >
                                    إسم الأب و لقبه
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    id="firstName"
                                    placeholder=""
                                    dir="rtl"
                                    // required
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Col>

                        <Col lg={12}>
                          <Card.Header>
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar-sm">
                                  <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                    <i className="bi bi-file-earmark-plus"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="card-title">
                                  البكالوريا أو مايعادلها/ Baccalauréat ou
                                  diplome équivalent
                                </h5>
                              </div>
                            </div>
                          </Card.Header>
                          <Card.Body>
                            <Row>
                              <Col lg={4}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <label
                                    htmlFor="الشعبة"
                                    className="form-label"
                                  >
                                    الشعبة
                                  </label>
                                  <select
                                    className="form-select text-muted"
                                    name="الشعبة"
                                    id="الشعبة"
                                    // required
                                    // value={formData.gender}
                                    onChange={selectChange}
                                  >
                                    <option value="">إختر الشعبة</option>
                                    <option value="آداب ">
                                      Lettres / آداب{" "}
                                    </option>
                                    <option value="رياضيات">
                                      {" "}
                                      Mathématiques /رياضيات{" "}
                                    </option>
                                    <option value="علوم تجريبية">
                                      Sciences Exprimentales / علوم تجريبية{" "}
                                    </option>
                                    <option value="اقتصاد وتصرف">
                                      Economie et Gestion / اقتصاد وتصرف
                                    </option>
                                    <option value="تقنية">
                                      Technique /تقنية{" "}
                                    </option>
                                    <option value="علوم إعلامية">
                                      Sciences Informatiques / علوم إعلامية{" "}
                                    </option>
                                    <option value="أخرى">Autres /أخرى</option>
                                  </select>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <label
                                    htmlFor="الدورة"
                                    className="form-label"
                                  >
                                    الدورة
                                  </label>
                                  <select
                                    className="form-select text-muted"
                                    name="الدورة"
                                    id="الدورة"
                                    // required
                                    // value={formData.gender}
                                    onChange={selectChange}
                                  >
                                    <option value="">إختر الدورة</option>
                                    <option value="Principale">
                                      Principale / الدورة الرئيسية
                                    </option>
                                    <option value="Controle">
                                      Controle /دورة التدارك{" "}
                                    </option>
                                  </select>
                                </div>
                              </Col>

                              <Col lg={4}>
                                <div
                                  className="mb-3"
                                  style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                  }}
                                >
                                  <Form.Label
                                    htmlFor="fullName"
                                    style={{
                                      direction: "rtl",
                                      textAlign: "right",
                                    }}
                                  >
                                    المعدل
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    id="firstName"
                                    placeholder=""
                                    dir="rtl"
                                    // required
                                  />
                                </div>
                              </Col>
                              <Row>
                                <Col lg={4}>
                                  <div
                                    className="mb-3"
                                    style={{
                                      direction: "rtl",
                                      textAlign: "right",
                                    }}
                                  >
                                    <Form.Label htmlFor="dateOfBirth">
                                      السنة
                                    </Form.Label>
                                    <Flatpickr
                                      value={selectedDate!}
                                      onChange={handleDateChange}
                                      className="form-control flatpickr-input"
                                      placeholder="السنة"
                                      options={{
                                        dateFormat: "d M, Y",
                                      }}
                                      id="dateOfBirth"
                                    />
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <div
                                    className="mb-3"
                                    style={{
                                      direction: "rtl",
                                      textAlign: "right",
                                    }}
                                  >
                                    <label
                                      htmlFor="المستوى الدراسي"
                                      className="form-label"
                                    >
                                      المستوى الدراسي
                                    </label>
                                    <select
                                      className="form-select text-muted"
                                      name="المستوى الدراسي"
                                      id="المستوى الدراسي"
                                      // required
                                      // value={formData.gender}
                                      onChange={selectChange}
                                    >
                                      <option value="">
                                        إختر المستوى الدراسي
                                      </option>
                                      <option value="سنة أولى إجازة">
                                        سنة أولى إجازة
                                      </option>
                                      <option value="سنة ثانية إجازة">
                                        سنة ثانية إجازة
                                      </option>
                                      <option value="سنة ثالثة إجازة">
                                        سنة ثالثة إجازة
                                      </option>
                                      <option value="سنة أولى ماجستير مهني">
                                        سنة أولى ماجستير مهني
                                      </option>
                                      <option value="سنة ثانية ماجستير مهني">
                                        سنة ثانية ماجستير مهني
                                      </option>
                                      <option value="سنة أولى ماجستير بحث">
                                        سنة أولى ماجستير بحث
                                      </option>
                                      <option value="سنة ثانية ماجستير بحث">
                                        سنة ثانية ماجستير بحث
                                      </option>
                                    </select>
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <div
                                    className="mb-3"
                                    style={{
                                      direction: "rtl",
                                      textAlign: "right",
                                    }}
                                  >
                                    <label
                                      htmlFor="الشعبة"
                                      className="form-label"
                                    >
                                      الشعبة
                                    </label>
                                    <select
                                      className="form-select text-muted"
                                      name="الشعبة"
                                      id="الشعبة"
                                      // required
                                      // value={formData.gender}
                                      onChange={selectChange}
                                    >
                                      <option value="">
                                        إختر المستوى الدراسي
                                      </option>
                                      <option value="سنة أولى إجازة">
                                        سنة أولى إجازة
                                      </option>
                                      <option value="سنة ثانية إجازة">
                                        سنة ثانية إجازة
                                      </option>
                                      <option value="سنة ثالثة إجازة">
                                        سنة ثالثة إجازة
                                      </option>
                                      <option value="سنة أولى ماجستير مهني">
                                        سنة أولى ماجستير مهني
                                      </option>
                                      <option value="سنة ثانية ماجستير مهني">
                                        سنة ثانية ماجستير مهني
                                      </option>
                                      <option value="سنة أولى ماجستير بحث">
                                        سنة أولى ماجستير بحث
                                      </option>
                                      <option value="سنة ثانية ماجستير بحث">
                                        سنة ثانية ماجستير بحث
                                      </option>
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                            </Row>
                          </Card.Body>
                        </Col>

                        <Col lg={12}>
                          <Card>
                            <Card.Header>
                              <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar-sm">
                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                      <i className="bi bi-person-fill-add"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h5 className="card-title">
                                    نوعية الترسيم / Type d'inscription
                                  </h5>
                                </div>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Row
                                style={{ direction: "rtl", textAlign: "right" }}
                              >
                                <Col lg={12}>
                                  <div>
                                    {[
                                      "جديد",
                                      "راسب",
                                      "نقلة",
                                      "إعادة توجيه",
                                      "إعادة إدماج",
                                      "ترسيم إستثنائي",
                                      "إجازة ثانية",
                                    ].map((option) => (
                                      <div
                                        className="form-switch mb-2"
                                        key={option}
                                      >
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          role="switch"
                                          id={option}
                                          checked={selectedOption === option}
                                          onChange={() =>
                                            handleCheckboxChange(option)
                                          }
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor={option}
                                          style={{ marginRight: "50px" }}
                                        >
                                          {option}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                  <Row>
                                    {fileInputs[selectedOption]?.map(
                                      (fileLabel, index) => (
                                        <Col lg={3} key={index}>
                                          <div className="mb-3">
                                            <label
                                              htmlFor={`fileInput${index}`}
                                              className="form-label"
                                            >
                                              {fileLabel}
                                            </label>
                                            <Form.Control
                                              name={`fileInput${index}`}
                                              type="file"
                                              id={`fileInput${index}`}
                                              accept=".pdf"
                                              placeholder="Choose File"
                                              className="text-muted"
                                            />
                                          </div>
                                        </Col>
                                      )
                                    )}
                                  </Row>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col lg={12}>
                          <div className="hstack gap-2 justify-content-end">
                            <Button
                              variant="primary"
                              id="add-btn"
                              type="submit"
                            >
                              Ajouter Etudiant
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AjouterEtudiant;