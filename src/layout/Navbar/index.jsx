import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Import for resume file icon

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Work', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'About', href: '#', current: false },
];

const socialMedia = [
  {
    name: 'Download CV',
    href: '#',
    icon: faFileAlt,
    current: false,
  },
  {
    // name: 'Facebook',
    href: 'https://facebook.com',
    icon: faFacebook,
    current: false,
  },
  {
    // name: 'Twitter',
    href: 'https://twitter.com',
    icon: faTwitter,
    current: false,
  },
  {
    // name: 'Instagram',
    href: 'https://instagram.com',
    icon: faInstagram,
    current: false,
  },
  {
    // name: 'Linkedin',
    href: 'https://linkedin.com',
    icon: faLinkedin,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
    <div className="bg-black text-white text-center">
      {/* Start Navbar */}

      <Disclosure as="nav" className="bg-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-grey hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex items-start justify-center">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-9 w-auto"
                />
              </div>
              <div className="hidden sm:ml-10 sm:block">
                <div className="flex justify-center space-x-5">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden sm:block">
                <div className="flex justify-center">
                  {socialMedia.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium flex items-center'
                      )}
                    >
                      <FontAwesomeIcon
                        size="lg"
                        icon={item.icon}
                        className="mr-2"
                      />{' '}
                      {/* Icon added here */}
                      <span className='text-cyan-600'>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
          <div className="flex justify-center space-y-1 px-2 pb-3 pt-2">
            {socialMedia.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium flex items-center'
                )}
              >
                <FontAwesomeIcon size="lg" icon={item.icon} className="mr-2" />{' '}
                {/* Icon added here */}
                {/* {item.name} */}
              </a>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* End Navbar */}
    </div>
  );
};

export default Navbar;
