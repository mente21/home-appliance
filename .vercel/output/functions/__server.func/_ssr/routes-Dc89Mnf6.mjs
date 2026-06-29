import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Shield, c as Phone, d as Linkedin, f as Instagram, g as Layers, h as ChevronDown, i as Twitter, l as MessageCircle, m as Clock, n as X, o as ShieldCheck, p as Facebook, r as Wrench, s as Play, t as Youtube, u as Mail } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dc89Mnf6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var ChatGPT_Image_Jun_25__2026__10_33_08_PM_removebg_preview_default = "/assets/ChatGPT_Image_Jun_25__2026__10_33_08_PM-removebg-preview-T1ZCs0jS.png";
var Gemini_Generated_Image_a4ew3wa4ew3wa4ew_removebg_preview_default = "/assets/Gemini_Generated_Image_a4ew3wa4ew3wa4ew-removebg-preview-JBcPqsL9.png";
var image_removebg_preview_default = "/assets/image-removebg-preview-CpUuv8wm.png";
var image_removebg_preview__1__default = "/assets/image-removebg-preview%20(1)-DJpquGip.png";
var image_removebg_preview__2__default = "/assets/image-removebg-preview%20(2)-BX7KgXBc.png";
var image_removebg_preview__3__default = "/assets/image-removebg-preview%20(3)-DBMzMT9X.png";
var image_removebg_preview__4__default = "/assets/image-removebg-preview%20(4)-C7DlJx52.png";
var air_conditioner_default = "/assets/air%20conditioner-ITCwuqWd.png";
function Bolt({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13 2L4 14h7l-1 8 9-12h-7l1-8z" })
	});
}
function Check({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "3",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12l5 5L20 7" })
	});
}
function Arrow({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 17L17 7M9 7h8v8" })
	});
}
function Index() {
	const [isVideoOpen, setIsVideoOpen] = (0, import_react.useState)(false);
	const [isFloatingSocialsOpen, setIsFloatingSocialsOpen] = (0, import_react.useState)(false);
	const [activeAccordion, setActiveAccordion] = (0, import_react.useState)(0);
	const accordionItems = [
		{
			title: "Certified & Experienced Technicians",
			icon: ShieldCheck,
			description: "Our technicians are fully certified, background-checked, and insured. They undergo regular training to troubleshoot and fix everything from vintage ranges to the newest smart appliances with digital control panels."
		},
		{
			title: "24/7 Emergency Appliance Support",
			icon: Clock,
			description: "A warm freezer or leaky washer can't wait. We provide 24/7 priority emergency response to ensure your home runs smoothly. Live dispatchers are online right now to schedule immediate help."
		},
		{
			title: "Advanced Tools & Modern Technology",
			icon: Wrench,
			description: "We utilize state-of-the-art diagnostic sensors, voltage meters, and thermal imaging to precisely isolate appliance system faults, leading to extremely fast, reliable fixes without guesswork."
		},
		{
			title: "All Major Brands & Models",
			icon: Layers,
			description: "We are factory authorized and parts-stocked for all major brands—including Samsung, Whirlpool, LG, Maytag, Bosch, KitchenAid, Frigidaire, Generac, and premium luxury brands."
		},
		{
			title: "Up-Front Pricing & Repair Warranty",
			icon: Shield,
			description: "We offer transparent flat-rate repair quotes up front. We back our elite standard of service with a solid 90-day parts and labor warranty, meaning you never pay twice for the same issue."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "0",
				height: "0",
				className: "absolute",
				"aria-hidden": "true",
				focusable: "false",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
					id: "remove-white-fringe",
					colorInterpolationFilters: "sRGB",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMorphology", {
						in: "SourceAlpha",
						operator: "erode",
						radius: "2",
						result: "alphaErode"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", {
						in: "SourceGraphic",
						in2: "alphaErode",
						operator: "in"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-white/5 relative z-50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-base sm:text-xl font-bold text-primary shrink-0 tracking-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bolt, { className: "h-6 w-6 shrink-0" }), " Home Appliances Repair & Service"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 xl:gap-8 text-sm font-medium",
							children: [
								"Home",
								"About Us",
								"Services",
								"Projects",
								"Blog",
								"Pages",
								"Contact Us"
							].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-primary transition-colors whitespace-nowrap",
								children: l
							}, l))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap",
								children: ["GET FREE QUOTE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "h-3 w-3" })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-visible bg-[#153320] text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-20 pb-10 lg:grid-cols-2 relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "z-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#1e452c] border border-[#FFB800]/20 px-4 py-2 text-sm text-white font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bolt, { className: "h-4 w-4 text-[#FFB800]" }), " Professional Appliance Repair"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-8 text-5xl font-extrabold leading-[1.2] tracking-tight md:text-6xl text-white",
								children: [
									"Your ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#FFB800]",
										children: "Trusted Experts"
									}),
									" for All",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
									"Appliance Repairs"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg text-white/90 font-medium",
								children: "We provide fast, reliable, and efficient appliance solutions—from washing machines, ovens, and stoves to generators, coffee machines, and more."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#",
									className: "inline-flex h-14 items-center gap-4 rounded-full bg-[#FFB800] pl-6 pr-2 text-sm font-bold text-black hover:bg-[#FFB800]/90 transition-colors",
									children: ["GET FREE QUOTE", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 place-items-center rounded-full bg-[#153320] text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "h-4 w-4 rotate-45" })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setIsVideoOpen(true),
									className: "inline-flex h-14 items-center gap-3 rounded-full border border-[#6B7280] bg-[#1a3a24] pr-6 pl-2 text-sm font-bold text-[#FFB800] hover:bg-[#1a3a24]/80 transition-colors cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 place-items-center rounded-full bg-[#FFB800] text-black",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 24 24",
											fill: "currentColor",
											className: "h-4 w-4 ml-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 5v14l11-7z" })
										})
									}), "WATCH VIDEO"]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative lg:static flex justify-center lg:justify-end mt-10 lg:mt-0 z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-transparent via-[#FFB800]/10 to-transparent blur-3xl rounded-full z-0 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] mx-auto z-10 px-4 sm:px-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative z-10 drop-shadow-2xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: { filter: "url(#remove-white-fringe)" },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: ChatGPT_Image_Jun_25__2026__10_33_08_PM_removebg_preview_default,
											alt: "Certified appliance technician",
											className: "w-full h-auto object-contain [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-[12%] -left-4 sm:-left-12 lg:-left-24 rounded-full bg-[#112a1a]/95 px-4 py-3 text-sm font-semibold shadow-[0_0_20px_rgba(255,184,0,0.15)] z-20 flex items-center gap-2 border border-[#FFB800]/20 text-white whitespace-nowrap transition-transform hover:scale-105 duration-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#FFB800]" }), " Free Appliance Diagnostic"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-[15%] -left-8 sm:-left-20 lg:-left-36 rounded-full bg-[#112a1a]/95 px-4 py-3 text-sm font-semibold shadow-[0_0_20px_rgba(255,184,0,0.15)] z-20 flex items-center gap-2 border border-[#FFB800]/20 text-white whitespace-nowrap transition-transform hover:scale-105 duration-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#FFB800]" }), " Book a Service Instantly"]
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-white/5 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl h-[350px] sm:h-[450px] lg:h-full min-h-[350px] sm:min-h-[450px] bg-[#0c1f13]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FFB800]/20 blur-3xl rounded-full z-0 transition-transform duration-700 group-hover:scale-110 pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: Gemini_Generated_Image_a4ew3wa4ew3wa4ew_removebg_preview_default,
								alt: "Certified appliance technician diagnosing equipment",
								referrerPolicy: "no-referrer",
								className: "absolute inset-0 h-full w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-105 z-10",
								style: { filter: "url(#remove-white-fringe)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0e2114]/90 via-[#0e2114]/25 to-transparent transition-opacity duration-300 group-hover:opacity-95 z-20 pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-6 left-6 right-6 backdrop-blur-md bg-[#112a1a]/90 p-5 sm:p-6 rounded-2xl border border-white/10 text-white shadow-xl flex items-center justify-between gap-4 z-30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-4xl font-black text-[#FFB800] flex items-center gap-1",
										children: ["2K", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white",
											children: "+"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-wider text-white/60 font-bold mt-1",
										children: "Completed Repairs"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-xs text-white/80 leading-relaxed max-w-[200px] sm:max-w-xs",
										children: "Delivering reliable appliance solutions across local homes and businesses."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden sm:grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/20 border border-primary/20 text-[#FFB800]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bolt, { className: "h-6 w-6" })
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.4em] text-primary",
							children: "— About Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-4xl font-semibold leading-tight md:text-5xl",
							children: "Keeping Your Home Running with Trusted Appliance Repair"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground",
							children: "At Home Appliances Repair and Service, we specialize in repairing major household appliances — washing machines, refrigerators, ovens, stoves, dryers and generators. Our certified technicians carry common parts on the truck so most jobs are done in a single visit."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 rounded-2xl border border-white/10 bg-card/60 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-primary",
									children: "★★★★★"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-lg",
									children: "“Home Appliances Repair and Service fixed our refrigerator and oven on the same visit — fast, clean, and fairly priced. They've become our go-to for every appliance.”"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=120&h=120&q=80",
										alt: "Dawit Haile",
										referrerPolicy: "no-referrer",
										className: "h-12 w-12 rounded-full object-cover border border-white/10"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: "Dawit Haile"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "Homeowner"
									})] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid grid-cols-2 gap-3 text-sm",
							children: [
								"24/7 Emergency Repairs",
								"Certified Technicians",
								"All Major Brands",
								"90-Day Repair Warranty"
							].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 rounded-full bg-secondary/60 px-4 py-2 border border-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/20 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/95 font-medium text-xs sm:text-sm",
									children: f
								})]
							}, f))
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/40 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-12 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.4em] text-primary",
								children: "— Why Choose Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-4xl font-semibold leading-tight md:text-5xl",
								children: "Why Homeowners Choose Us for Appliance Repair"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-muted-foreground",
								children: "Genuine parts, transparent pricing and technicians trained on every major brand — from Samsung and LG to Whirlpool, Bosch and Generac."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => setIsVideoOpen(true),
								className: "group relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#112a1a] cursor-pointer shadow-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "https://img.youtube.com/vi/WJ4EBYS9SeI/hqdefault.jpg",
										alt: "Home Appliances Repair and Service - Intro Video Thumbnail",
										className: "absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105",
										referrerPolicy: "no-referrer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-0 flex flex-col items-center justify-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative flex h-16 w-16 items-center justify-center rounded-full bg-[#FFB800] text-black shadow-[0_0_20px_rgba(255,184,0,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFB800]/90",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -inset-2 rounded-full border border-[#FFB800]/30 animate-ping opacity-40 group-hover:animate-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-6 w-6 fill-current ml-1" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold uppercase tracking-[0.3em] text-white/90 drop-shadow-sm group-hover:text-primary transition-colors",
											children: "Watch Video Tour"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-muted-foreground",
								children: "Watch our team in action delivering fast, top-quality appliance repair services."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: accordionItems.map((item, idx) => {
								const isOpen = activeAccordion === idx;
								const IconComponent = item.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-[#FFB800]/30 bg-[#153320]/60 shadow-[0_8px_30px_rgb(0,0,0,0.15)]" : "border-white/10 bg-card/40 hover:border-white/20 hover:bg-card/60"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setActiveAccordion(isOpen ? null : idx),
										className: "w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `grid h-10 w-10 place-items-center rounded-xl transition-all duration-300 ${isOpen ? "bg-primary/20 text-primary" : "bg-white/5 text-muted-foreground"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, { className: "h-5 w-5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-base sm:text-lg font-semibold transition-colors ${isOpen ? "text-white" : "text-white/80"}`,
												children: item.title
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `grid h-7 w-7 place-items-center rounded-full border transition-all duration-300 ${isOpen ? "border-primary/40 text-primary rotate-180 bg-primary/10" : "border-white/10 text-white/50"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 border-t border-white/5 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-5 pt-4 text-sm text-muted-foreground leading-relaxed",
											children: item.description
										})
									})]
								}, idx);
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.4em] text-primary",
								children: "— Our Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl",
								children: "Repair Services for Every Major Appliance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-2xl text-muted-foreground",
								children: "From the kitchen to the laundry room to the back-up generator — we diagnose, repair and service the appliances your home depends on."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								title: "Washing Machine Repair",
								image: image_removebg_preview__3__default,
								desc: "Expert diagnostic and repair for all top and front-load washers."
							},
							{
								title: "Refrigerator Repair",
								image: image_removebg_preview_default,
								desc: "Fixing compressor failures, temperature leaks, and smart cooling systems."
							},
							{
								title: "Oven & Stove Repair",
								image: image_removebg_preview__1__default,
								desc: "Thermostat calibrations, heating elements replacement, and burner repairs."
							},
							{
								title: "Air Conditioner Repair",
								image: air_conditioner_default,
								desc: "Fixing cooling issues, replacing filters, and servicing compressors."
							},
							{
								title: "Coffee Machine Repair",
								image: image_removebg_preview__2__default,
								desc: "Professional espresso machine tuning, pump descaling, and electrical fixes."
							},
							{
								title: "Generator Repair & Service",
								image: image_removebg_preview__4__default,
								desc: "Standby generator servicing, engine rebuilds, and routine tune-ups."
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-4 transition-all duration-300 hover:border-primary/50 hover:bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-xl aspect-[4/3] w-full bg-secondary/30 relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.image,
									alt: s.title,
									referrerPolicy: "no-referrer",
									className: "h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-col justify-between p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bolt, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold text-lg",
											children: s.title
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "h-5 w-5 text-primary shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground pl-13",
									children: s.desc
								})]
							})]
						}, s.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.4em] text-primary",
							children: "— Recent Repairs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl",
							children: "Real Repairs, Happy Households"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							className: "inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary",
							children: ["View All Repairs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "h-3 w-3" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								title: "LG Front-Load Washer Rebuild",
								status: "Completed",
								date: "March 12, 2026",
								desc: "Replaced drum bearings and door seal on a 6-year-old front-loader — back in service the same day.",
								image: "https://images.unsplash.com/photo-1545173168-9f1947eebd01?auto=format&fit=crop&w=600&q=80"
							},
							{
								title: "Samsung Smart Fridge Repair",
								status: "Completed",
								date: "April 02, 2026",
								desc: "Diagnosed and replaced a failed inverter compressor; restored cooling and ice-maker function.",
								image: "https://images.unsplash.com/photo-1571175432247-5c868db2a36b?auto=format&fit=crop&w=600&q=80"
							},
							{
								title: "Generac Standby Generator Service",
								status: "In Progress",
								date: "May 18, 2026",
								desc: "Annual overhaul, load test and battery replacement on a 22kW residential standby generator.",
								image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
							}
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group overflow-hidden rounded-2xl border border-white/10 bg-card/60 transition-all duration-300 hover:border-primary/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden aspect-[4/3] w-full bg-secondary/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.title,
									referrerPolicy: "no-referrer",
									className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-primary/20 px-3 py-1 text-primary",
											children: p.status
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-secondary/60 px-3 py-1 text-muted-foreground",
											children: p.date
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-xl font-semibold",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: p.desc
									})
								]
							})]
						}, p.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/40 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-12 lg:grid-cols-2 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.4em] text-primary",
								children: "— Contact Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-4xl font-semibold leading-tight md:text-5xl",
								children: "We're Here to Keep Your Home Running Smoothly"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-muted-foreground",
								children: "Get immediate help from our certified appliance technicians. Avoid long forms and wait times — call us directly on our 24/7 hotline or speak to a live support agent right now."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs uppercase tracking-widest text-muted-foreground mb-4",
									children: "Connect on Social Media"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-3",
									children: [
										{
											Icon: Facebook,
											url: "https://facebook.com",
											label: "Facebook"
										},
										{
											Icon: Twitter,
											url: "https://twitter.com",
											label: "Twitter"
										},
										{
											Icon: Instagram,
											url: "https://instagram.com",
											label: "Instagram"
										},
										{
											Icon: Linkedin,
											url: "https://linkedin.com",
											label: "LinkedIn"
										},
										{
											Icon: Youtube,
											url: "https://youtube.com",
											label: "YouTube"
										}
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: s.url,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": s.label,
										className: "grid h-12 w-12 place-items-center rounded-full bg-white/5 border border-white/10 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.Icon, { className: "h-5 w-5" })
									}, s.label))
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-white/10 bg-[#153320] p-6 sm:p-8 shadow-2xl space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-bold text-white mb-2",
									children: "Connect Instantly"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-white/70 mb-4",
									children: "Choose an option below to connect with a repair specialist."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:+18005552487",
									className: "group flex items-center gap-4 rounded-2xl bg-[#112a1a]/90 border border-white/5 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-[#112a1a]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/20 text-primary transition-transform group-hover:scale-105",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-[#FFB800]" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs uppercase tracking-wider text-white/50",
											children: "Call 24/7 Support"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-lg sm:text-xl font-bold text-white mt-0.5 group-hover:text-[#FFB800] transition-colors",
											children: "+251 988110506"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-[#FFB800] mt-1 flex items-center gap-1.5 font-medium",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-[#FFB800] animate-pulse" }), "Emergency dispatch active"]
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:support@homeappliancesrepair.com",
									className: "group flex items-center gap-4 rounded-2xl bg-[#112a1a]/90 border border-white/5 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-[#112a1a]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/20 text-primary transition-transform group-hover:scale-105",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-[#FFB800]" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs uppercase tracking-wider text-white/50",
												children: "Email Support"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-base sm:text-lg lg:text-xl font-bold text-white mt-0.5 group-hover:text-[#FFB800] transition-colors break-all",
												children: "support@homeappliancesrepair.com"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-[#FFB800] mt-1 flex items-center gap-1.5 font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-[#FFB800] animate-pulse" }), "Response under 1 hour"]
											})
										]
									})]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-white/10 bg-secondary/40 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-lg sm:text-xl font-bold text-primary leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bolt, { className: "h-6 w-6 shrink-0" }), " Home Appliances Repair & Service"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "Professional appliance repair for homes and businesses — washing machines, refrigerators, ovens, stoves, generators and more."
					})] }), [
						{
							h: "Company",
							l: [
								"About Us",
								"Services",
								"Projects",
								"Contact"
							]
						},
						{
							h: "Services",
							l: [
								"Washing Machines",
								"Refrigerators",
								"Ovens & Stoves",
								"Generators"
							]
						},
						{
							h: "Contact",
							l: [
								"support@homeappliancesrepair.com",
								"+251 988110506",
								"24/7 Emergency",
								"Mon–Sat 8am–8pm"
							]
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-semibold",
						children: c.h
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm text-muted-foreground",
						children: c.l.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
					})] }, c.h))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-muted-foreground",
					children: "© 2026 Home Appliances Repair & Service. All rights reserved."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: isVideoOpen,
				onOpenChange: setIsVideoOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-4xl border-none bg-black p-0 overflow-hidden aspect-video",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
						className: "sr-only",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Watch Appliance Repair Video" })
					}), isVideoOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						className: "h-full w-full",
						src: "https://www.youtube.com/embed/WJ4EBYS9SeI?autoplay=1",
						title: "Home Appliances Repair and Service — intro video",
						allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: true
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3",
				children: [isFloatingSocialsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-64 bg-[#112a1a] border border-white/10 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-white/5 pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-[#FFB800] uppercase tracking-wider",
								children: "Connect With Us"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsFloatingSocialsOpen(false),
								className: "text-white/40 hover:text-white transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-white/70",
							children: "Message us on any of our social channels below:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-1.5",
							children: [
								{
									Icon: Facebook,
									url: "https://facebook.com",
									label: "Facebook",
									color: "hover:text-[#1877F2]"
								},
								{
									Icon: Twitter,
									url: "https://twitter.com",
									label: "Twitter",
									color: "hover:text-[#1DA1F2]"
								},
								{
									Icon: Instagram,
									url: "https://instagram.com",
									label: "Instagram",
									color: "hover:text-[#E1306C]"
								},
								{
									Icon: Linkedin,
									url: "https://linkedin.com",
									label: "LinkedIn",
									color: "hover:text-[#0A66C2]"
								},
								{
									Icon: Youtube,
									url: "https://youtube.com",
									label: "YouTube",
									color: "hover:text-[#FF0000]"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: s.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: `flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-white/80 transition-all duration-300 hover:bg-[#153320] hover:border-primary/25 ${s.color}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.Icon, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-xs",
									children: s.label
								})]
							}, s.label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setIsFloatingSocialsOpen(!isFloatingSocialsOpen),
					className: `grid h-14 w-14 place-items-center rounded-full bg-[#FFB800] text-black shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer relative ${isFloatingSocialsOpen ? "rotate-90 bg-white" : ""}`,
					"aria-label": "Contact us",
					children: isFloatingSocialsOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute -top-1 -right-1 flex h-4 w-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white/20 text-[9px] font-bold text-white items-center justify-center",
							children: "•"
						})]
					})] })
				})]
			})
		]
	});
}
//#endregion
export { Index as component };
