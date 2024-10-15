// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const MailBenefit = dynamic(() => import("./mail-benefit/mail-benefit"));
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"));
const EmailsSlap = dynamic(() => import("./emails-slap/emails-slap"));
const Templates = dynamic(() => import("./templates/templates"));
const Campaign = dynamic(() => import("./campaign/campaign"));

export { Hero, MailBenefit, ConvertTypes, EmailsSlap, Templates, Campaign };
