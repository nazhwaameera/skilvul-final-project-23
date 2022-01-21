// import React from "react";
// // import ReactDOM from "react-dom";
// import { Dashboard } from "@uppy/react";
// import "@uppy/core/dist/style.css";
// import "@uppy/dashboard/dist/style.css";

// const Uppy = require("@uppy/core");
// const GoogleDrive = require("@uppy/google-drive");
// const Dropbox = require("@uppy/dropbox");
// const Instagram = require("@uppy/instagram");
// const Webcam = require("@uppy/webcam");
// // const Tus = require("@uppy/tus");
// const XHRUpload = require("@uppy/xhr-upload");

// export default class Uploader extends React.Component {
//   constructor(props) {
//     super(props);

//     this.uppy = Uppy({
//       debug: true,
//       autoProceed: false,
//     })
//       .use(XHRUpload, {
//         limit: 1,
//       })
//       .use(GoogleDrive, {
//         companionUrl: "https://companion.uppy.io",
//       })
//       .use(Dropbox, {
//         companionUrl: "https://companion.uppy.io",
//       })
//       .use(Instagram, {
//         companionUrl: "https://companion.uppy.io",
//       })
//       .use(Webcam)
//       .on("complete", (result) => {
//         console.log("successful files:", result.successful);
//         console.log("failed files:", result.failed);
//       });
//   }

//   componentWillUnmount() {
//     // this.uppy.close();
//   }

//   render() {
//     return <Dashboard uppy={this.uppy} plugins={["Webcam", "Instagram", "GoogleDrive", "Dropbox"]} />;
//   }
// }
