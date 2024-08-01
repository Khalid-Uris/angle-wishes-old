import mail from "./../assets/images/mail.png";
import phone from "./../assets/images/phone.png";
import location from "./../assets/images/location.png";
import twitter from "./../assets/images/twitter.png";
import linkedIn from "./../assets/images/linkedIn.png";
import fb from "./../assets/images/fb.png";
import insta from "./../assets/images/insta.png";
import X from "./../assets/images/X.png";
import youtube from "./../assets/images/youtube.png";
import tiktok from "./../assets/images/tiktok.png";
import pinterest from "./../assets/images/pinterest.png";

const footerValues = [
  {
    angel_wishes: [
      {
        id: 1,
        title: "About Us",
        route: "/about-us",
      },
      {
        id: 2,
        title: "Careers",
        route: "/careers",
      },
      {
        id: 6,
        title: "Contact Us",
        route: "/contact-us",
      },
      {
        id: 3,
        title: "Mission and Vision",
        route: "/mission-vision",
      },
      {
        id: 4,
        title: "Report a Concern",
        route: "/concern-report",
      },
      {
        id: 5,
        title: "Accessibility Report",
        route: "/accessibility-report",
      },
    ],
    usefull_links: [
      {
        id: 1,
        title: "FAQ",
      },
      {
        id: 2,
        title: "Privacy Policy",
      },
      {
        id: 3,
        title: "Terms & Condition",
      },
      {
        id: 4,
        title: "Copyright Notice",
      },
      {
        id: 5,
        title: "Need Help",
      },
      {
        id: 6,
        title: "Feedback/Support Survey",
      },
    ],
    contacts: [
      {
        id: 1,
        image: mail,
        title: "support@angel-wishes.com",
      },
      {
        id: 2,
        image: phone,
        title: "(949) 771-6361",
      },
      // {
      //     id:3,
      //     image: location,
      //     title:"street 112/5"
      // }
    ],
  },
];

const socialMedia = [
  {
    id: 1,
    img: twitter,
  },
  {
    id: 2,
    img: linkedIn,
  },
  {
    id: 3,
    img: fb,
  },
  {
    id: 4,
    img: insta,
  },
  {
    id: 5,
    img: X,
  },
  {
    id: 6,
    img: youtube,
  },
  {
    id: 7,
    img: tiktok,
  },
  {
    id: 8,
    img: pinterest,
  },
];

export { footerValues, socialMedia };
