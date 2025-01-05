import { IoIosArrowDown } from "react-icons/io";


export default function Dropdown({ title, items, className }) {
    return (
        <div className={`${className}`}>
            <div className={`${className}-trigger`}>
                {title}
                <IoIosArrowDown size={20} />
            </div>
            <div className={`${className}-content`}>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
