import { BsParagraph } from "react-icons/bs";
import { CiText, CiImageOn, CiVideoOn } from "react-icons/ci";
import { LuSeparatorHorizontal } from "react-icons/lu";
import { IoIosLink } from "react-icons/io";
import Md from "../comps/DocumentMd";
import Jumbotron from "../comps/DocumentJumbotron";
import { RiTextBlock } from "react-icons/ri";

const elements = {
	title: {
		editor: [
			{ type: "input", inputType: "text", key: "content", label: "Titre" },
			{ type: "align", key: "align", label: "Alignement" },
		],
		Render: ({ content, align, ...props }) => <h1 {...props}><Md $align={align}>{content}</Md></h1>,
		title : "Titre",
		Icon: ({ ...props }) => <CiText {...props} />,
	},
	title2: {
		editor: [{ type: "input", inputType: "text", key: "content", label: "Titre" },{ type: "align", key: "align", label: "Alignement" }],
		Render: ({ content, align, ...props }) => <h2 {...props}><Md $align={align}>{content}</Md></h2>,
		title : "Titre 2",
		Icon: ({ ...props }) => <CiText {...props} />,
	},
	title3: {
		editor: [{ type: "input", inputType: "text", key: "content", label: "Titre" },{ type: "align", key: "align", label: "Alignement" }],
		Render: ({ content, align, ...props }) => <h3 {...props}><Md $align={align}>{content}</Md></h3>,
		title : "Titre 3",
		Icon: ({ ...props }) => <CiText {...props} />,
	},
	title4: {
		editor: [{ type: "input", inputType: "text", key: "content", label: "Titre" },{ type: "align", key: "align", label: "Alignement" }],
		Render: ({ content, align, ...props }) => <h4 {...props}><Md $align={align}>{content}</Md></h4>,
		title : "Titre 4",
		Icon: ({ ...props }) => <CiText {...props} />,
	},
	text: {
		editor: [{ type: "textarea", key: "content", label: "Contenu" },{ type: "align", key: "align", label: "Alignement" }],
		Render: ({ content, align, ...props }) => <Md {...props} $align={align}>{content}</Md>,
		title : "Texte",
		Icon: ({ ...props }) => <BsParagraph {...props} />,
	},
	link: {
		editor: [
			{ type: "input", key: "href", label: "Lien vers ..." },
			{ type: "input", key: "content", label: "Texte" },
			{ type: "align", key: "align", label: "Alignement" }
		],
		Render: ({ href, content : text, align, ...props }) => <a href={href} {...props}><Md $align={align}>{(text === undefined || text === "") ? href : text}</Md></a>,
		title : "Lien",
		Icon: ({ ...props }) => <IoIosLink {...props} />,
	},
	small: {
		editor: [{ type: "textarea", key: "content", label: "Contenu" },{ type: "align", key: "align", label: "Alignement" }],
		Render: ({ content, align, ...props }) => <small><Md {...props}>{content}</Md></small>,
		title : "Petit texte",
		Icon: ({ ...props }) => <BsParagraph {...props} />,
	},
	hr: {
		editor: [],
		Render: ({ content = "___", ...props }) => <Md>{content}</Md>,
		title : "Separator",
		Icon: ({ ...props }) => <LuSeparatorHorizontal {...props} />,
	},
	image: {
		editor: [{ type: "src", key: "content", label: "Source" }],
		Render: ({ content }) => <img src={content} />,
		title : "Image",
		Icon: ({ ...props }) => <CiImageOn {...props} />,
	},
	video: {
		editor: [{ type: "input", key: "content", label: "Source" }],
		Render: ({ content }) => <video src={content} controls />,
		title : "Video",
		Icon: ({ ...props }) => <CiVideoOn {...props} />,
	},
	jumbotron: {
		editor: [
			{ type: "color", key: "color", label: "Couleur" },
			{ type: "color", key: "tcolor", label: "Couleur texte" },
			{ type: "input", key: "title", label: "Titre" },
			{ type: "textarea", key: "content", label: "Texte" },
			{ type: "align", key: "align", label: "Alignement" }
		],
		Render: ({ color, tcolor, title, align, content : text, ...props }) => <Jumbotron $bg={color} $clr={tcolor} $align={align} {...props}>
			{(title !== undefined && title !== "") && <b><Md $align={align}>{title}</Md></b>}
			{(text !== undefined && text !== "") && <Md $align={align}>{text}</Md>}
		</Jumbotron>,
		title : "Bloc",
		Icon: ({ ...props }) => <RiTextBlock {...props} />,
	},
}

export default elements;