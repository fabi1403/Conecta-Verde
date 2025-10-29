
import React from 'react';

export const Logo = () => (
    <img src="/conecta.jpeg" alt="Conecta Verde Logo" className="h-14 w-14 rounded-full shadow-md object-cover" />
);

export const CartIcon = ({className = "h-6 w-6"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="6" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
    </svg>
);

export const Step1Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-[#c7a97f]" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
        <path d="M12 14c-1.5 0 -2.5 -.8 -3 -2" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
        <path d="M8.5 16a2.5 2.5 0 0 1 3.5 1.5a2.5 2.5 0 0 1 3.5 -1.5" />
    </svg>
);

export const Step2Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-[#8db246]" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M17.8 20l-12 -1.5c-1 -.1 -1.8 -1.3 -1.8 -2.3v-11.2c0 -1 .8 -2 1.8 -2.3l12 -1.5c1.2 -.2 2.2 .8 2.2 2v15.5c0 1.2 -1 2.3 -2.2 2.3z" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M12 6.5l0 -2.5" />
        <path d="M12 17.5l0 2.5" />
    </svg>
);

export const Step3Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-[#7ea09b]" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="12" y1="12" x2="12" y2="12.01" />
        <path d="M14.218 10.235l-1.218 -4.235h-2l-1.218 4.235" />
        <path d="M13.232 14.283l.768 2.717h-4l.768 -2.717" />
        <path d="M10.885 10.007c-.422 -.278 -.634 -.526 -.634 -.757c0 -.552 .448 -1 1 -1s1 .448 1 1c0 .23 -.212 .479 -.634 .757" />
        <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
    </svg>
);

export const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 21c.5 -4.5 2.5 -8 7 -8" />
        <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12.986 13z" />
    </svg>
);

export const UserGroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
        <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M17 10h2a2 2 0 0 1 2 2v1" />
        <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
    </svg>
);

export const WeightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 3c-1.2 0 -2.4 .2 -3.5 .7" />
        <path d="M12 21c1.2 0 2.4 -.2 3.5 -.7" />
        <path d="M12 21a9 9 0 0 1 -3.5 -17.3" />
        <path d="M12 3a9 9 0 0 1 3.5 17.3" />
        <path d="M12 21l-3 -15" />
        <path d="M12 3l3 15" />
        <path d="M3 12h18" />
    </svg>
);

export const EmptyCartIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const PlusCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const CompostIcon = ({ className = "h-16 w-16 text-[#c7a97f]" }: { className?: string }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className, viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement('path', { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        React.createElement('path', { d: "M12 11a5 5 0 0 0 -5 5h10a5 5 0 0 0 -5 -5z" }),
        React.createElement('path', { d: "M12 11v-7" }),
        React.createElement('path', { d: "M7 11c0 -1.333 .333 -2.333 1 -3" }),
        React.createElement('path', { d: "M17 11c0 -1.333 -.333 -2.333 -1 -3" }),
        React.createElement('path', { d: "M12 21a5 5 0 0 0 5 -5" }),
        React.createElement('path', { d: "M12 21a5 5 0 0 1 -5 -5" })
    )
);

export const BiolIcon = ({ className = "h-16 w-16 text-[#7ea09b]" }: { className?: string }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className, viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement('path', { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        React.createElement('path', { d: "M6.161 20.004a4 4 0 0 1 -2.161 -3.504v-10.5a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v10.5a4 4 0 0 1 -2.161 3.504" }),
        React.createElement('path', { d: "M15 14a2 2 0 0 0 2 2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2a2 2 0 0 0 -2 2v4z" }),
        React.createElement('path', { d: "M15 14h-5" }),
        React.createElement('path', { d: "M7 11.5a1.5 1.5 0 0 1 3 0" })
    )
);

export const MicroorganismIcon = ({ className = "h-16 w-16 text-[#8db246]" }: { className?: string }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className, viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement('path', { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        React.createElement('path', { d: "M4.5 12.5l8 -8" }),
        React.createElement('path', { d: "M4.5 4.5l8 8" }),
        React.createElement('path', { d: "M12.5 19.5l8 -8" }),
        React.createElement('path', { d: "M12.5 11.5l8 8" }),
        React.createElement('circle', { cx: "4.5", cy: "8.5", r: "1" }),
        React.createElement('circle', { cx: "8.5", cy: "4.5", r: "1" }),
        React.createElement('circle', { cx: "8.5", cy: "12.5", r: "1" }),
        React.createElement('circle', { cx: "12.5", cy: "8.5", r: "1" }),
        React.createElement('circle', { cx: "12.5", cy: "15.5", r: "1" }),
        React.createElement('circle', { cx: "15.5", cy: "12.5", r: "1" }),
        React.createElement('circle', { cx: "19.5", cy: "19.5", r: "1" }),
        React.createElement('circle', { cx: "19.5", cy: "4.5", r: "1" }),
        React.createElement('circle', { cx: "4.5", cy: "19.5", r: "1" })
    )
);

export const HomeIcon = ({className = "h-5 w-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
    </svg>
);

export const CogIcon = ({className = "h-5 w-5"}: {className?: string}) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.066 2.573c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.573 1.066c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.066 -2.573c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.573 -1.066z" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
);

export const TagIcon = ({className = "h-5 w-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M11 3l9 9a1.5 1.5 0 0 1 0 2.121l-4.242 4.242a1.5 1.5 0 0 1 -2.121 0l-9 -9v-4a4 4 0 0 1 4 -4h4" />
        <circle cx="9" cy="9" r="2" />
    </svg>
);

export const PlusIcon = ({className = "h-5 w-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

export const MinusIcon = ({className = "h-5 w-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

export const TrashIcon = ({className = "h-5 w-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </svg>
);

export const FacebookIcon = ({className = "h-6 w-6"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
    </svg>
);

export const InstagramIcon = ({className = "h-6 w-6"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
    </svg>
);

export const TwitterIcon = ({className = "h-6 w-6"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M4 4l16 16m-16 0l16 -16" />
    </svg>
);

export const CheckCircleIcon = ({className = "h-16 w-16"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const LocationIcon = ({className = "h-5 w-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
    </svg>
);

export const PhoneIcon = ({className = "h-5 w-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
);

export const EmailIcon = ({className = "h-5 w-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
    </svg>
);
