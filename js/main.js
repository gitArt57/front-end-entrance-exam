import '../css/style.css'
import {createExperienceSection} from "./components/experience";
import {createLangsSection} from "./components/languages";
import {createToolsSection} from "./components/tools";
import {createEduSection} from "./components/education";
import {createInterestsSection} from "./components/interests";
import {createContactSection} from "./components/contact";
import {createNameSection} from "./components/name";
import {setEditableListener} from "./utils";
import {createProfileSection} from "./components/photo-profile";
import {createTopBar} from "./components/bar/index.js";
import {initSavePDFButton} from "./utils/save-pdf.js";

document.querySelector('#topbar').innerHTML = createTopBar();

document.querySelector('#app').innerHTML = [
    createProfileSection(),
    createNameSection(),
    createLangsSection(),
    createExperienceSection(),
    createToolsSection(),
    createEduSection(),
    createInterestsSection(),
    createContactSection()
].join('\n');

setEditableListener();
initSavePDFButton('#save-pdf')
