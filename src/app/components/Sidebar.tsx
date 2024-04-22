import { Icon } from './Icon'; // Assuming you have an Icon component
import { LinkOrButton } from './LinkOrButton';

const Sidebar = () => {
    const ITEMS = [
        { label: 'Acivities', href: '/home', icon: 'activities' },
        { label: 'Hotels', href: '/home', icon: 'hotels' },
        { label: 'Flights', href: '/dashboard', icon: 'flight' },
        { label: 'Study', href: '/wallet', icon: 'study' },
        { label: 'Visa', href: '/', icon: 'visa' },
        { label: 'Immigration', href: '/commission', icon: 'immigration' },
        { label: 'Medical', href: '/commission', icon: 'medical' },
        { label: 'Vacation Packages', href: '/commission', icon: 'vacation' },
    ]
    return (


        <div className="h-full bg-white flex flex-col gap-6 py-4 px-7">
            {ITEMS.map((item, index) => (
                <div key={index} className="flex flex-row gap-4 cursor-pointer ">
                    <Icon id={item.icon} className="w-6 h-6  mb-1" />
                    <span className="text-primary-400 text-xs">{item.label}</span>
                </div>
            ))}

            <div className='flex flex-row gap-7 items-center bg-secondary-300 px-3 py-2 rounded'>
                <LinkOrButton isFull={false} className='px-5 text-white'>Go</LinkOrButton>
                <p className='text-primary-40 font text-xs  '>Personal Account</p>
                <Icon id="up-down" className="w-6 h-6  mb-1" />

            </div>
        </div>
    );
};

export default Sidebar;
