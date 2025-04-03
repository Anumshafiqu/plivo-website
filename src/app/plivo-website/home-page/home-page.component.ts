import { Component , HostListener , Renderer2 } from '@angular/core';
interface MenuItem {
  label: string;
  children?: MenuItem[];
}
import { PRIME_NG_CONFIG} from 'primeng/config';
import Aura from '@primeng/themes/aura';

interface LogoCategory {
  name: string;
  subcategories?: string[];
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  isDropdownOpen = false;
  popularKeywords: string[] = [
    '3D', 'Animal', 'Bird', 'Camera', 'Car', 'Circle', 'Crown', 'Eagle',
    'Fire', 'Font', 'Heart', 'House', 'King', 'Leaf', 'Letter', 'Mascot',
    'Minimalist', 'Modern', 'Queen', 'Shield', 'Simple', 'Text', 'Tree', 'Vintage'
  ];

  topIndustries: string[] = [
    'App', 'Architecture', 'Beauty', 'Brand', 'Business', 'Company', 'Construction',
    'DJ', 'Doctor', 'Esports', 'Fashion', 'Fitness', 'Food', 'Gaming', 'Instagram',
    'Medical', 'Music', 'Photography', 'Real Estate', 'Restaurant', 'Social Media',
    'Sports', 'Technology', 'Travel'
  ];
    // Logo Dropdown Data
    logoKeywords: string[] = [
      '3D', 'Colorful', 'Company', 'Cool', 'Creative', 'Cute', 'Elegant',
      'Luxury', 'Minimal', 'Modern', 'Premium', 'Professional', 'Simple', 'Unique'
    ];
  
    logoIndustries: string[] = [
      'Bakery', 'Barber', 'Beauty', 'Cleaning', 'Cleaning Service', 'Construction',
      'Electrician', 'Handyman', 'Insurance', 'Landscaping', 'Lawyer', 'Photography',
      'Real Estate', 'Restaurant'
    ];
  
    // Business Card Dropdown Data
    businessKeywords: string[] = [
      '3D', 'Colorful', 'Company', 'Cool', 'Creative', 'Cute', 'Elegant',
      'Luxury', 'Minimal', 'Modern', 'Premium', 'Professional', 'Simple', 'Unique'
    ];
  
    businessIndustries: string[] = [
      'Bakery', 'Barber', 'Beauty', 'Cleaning', 'Cleaning Service', 'Construction',
      'Electrician', 'Handyman', 'Insurance', 'Landscaping', 'Lawyer', 'Photography',
      'Real Estate', 'Restaurant'
    ];
      // Social Media Covers
  socialCovers: string[] = [
    'Facebook Covers', 'YouTube Banners', 'Twitch Banners', 'LinkedIn Banners',
    'Facebook Event Covers', 'SoundCloud Banners', 'Twitter Headers',
    'Pinterest Board Covers', 'Zoom Backgrounds', 'Etsy Banners', 'Tumblr Banners'
  ];

  // Social Media Posts
  socialPosts: string[] = [
    'Instagram Posts', 'Instagram Stories', 'Facebook Posts', 'Facebook Stories',
    'Facebook Ads', 'Twitter Posts', 'LinkedIn Posts', 'Pinterest Pins',
    'TikTok Videos', 'Instagram Reels', 'YouTube Shorts', 'YouTube Videos',
    'Whatsapp Stories', 'Snapchat Designs'
  ];

  // Social Media Profile Pictures
  socialProfiles: string[] = [
    'Facebook Profile Pictures', 'Instagram Profile Pictures', 'LinkedIn Profile Pictures',
    'Pinterest Profile Pictures', 'SoundCloud Profile Pictures', 'Tumblr Profile Pictures',
    'Twitch Profile Pictures', 'YouTube Channel Icons'
  ];
  socailIndustries: string[] = [
    'Website Builder',
    'Link in Bio',
    'Digital Business Cards',
    'Domain Names',
  ];
  moreItems: string[] = [
    'Email Signatures',
    'Letterheads',
    'Posters',
    'Flyers',
    'Invoices',
    'Menus',
    'Postcards',
    'Gift Certificates',
    'Invitations',
    'Thank You Cards',
    'Videos',
    'Animations',
    'T-Shirts',
    'QR Codes',
    'Presentations'
  ];
  aiTools: string[] = [
    'AI Logo Generator',
    'AI Background Remover',
    'AI Business Name Generator',
    'AI Domain Name Generator',
    'AI Website Generator',
    'AI Business Card Generator',
    'AI Poster Generator',
    'AI Flyer Generator',
    'AI Link In Bio Generator'
  ];





  mobileMenuOpen = false;
  menuItems = [
    { name: 'Logos', open: false },
    { name: 'Business Cards', open: false },
    { name: 'Websites', open: false },
    { name: 'AI', open: false }
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleDropdown(item: any) {
    item.open = !item.open;
  }


  isMenuOpen = false; // Controls visibility of the menu

  // Define the main menu structure
  mainMenu: MenuItem[] = [
    // { label: 'Logos', children: [{ label: '3D' }, { label: 'Minimal' },{ label: 'Animal' },
    //   { label: 'Camera' },{ label: 'Car' },
    //   { label: 'Car' },
    //   { label: 'Circle' },{ label: 'Crown' },
    //   { label: 'Eagle' }] },

    { 
      label: 'Logos', 
      children: [
        { 
          label: 'Popular keywords', 
          children: [
            { label: '3D' }, 
            { label: 'Minimal' }, 
            { label: 'Modern' }, 
            { label: 'Luxury' }, 
            { label: 'Professional' }
          ] 
        },
        { 
          label: 'Top industries', 
          children: [
            { label: 'Animal' }, 
            { label: 'Camera' }, 
            { label: 'Car' }, 
            { label: 'Circle' }, 
            { label: 'Crown' }, 
            { label: 'Eagle' }
          ] 
        }
      ] 
    },
    { 
      label: 'Business Cards', 
      children: [
        { 
          label: 'Popular Keywords',
          children: [
            { label: '3D' },
            { label: 'Colorful' },
            { label: 'Company' },
            { label: 'Cool' },
            { label: 'Creative' },
            { label: 'Cute' },
            { label: 'Elegant' },
            { label: 'Luxury' },
            { label: 'Minimal' },
            { label: 'Modern' },
            { label: 'Premium' },
            { label: 'Professional' },
            { label: 'Simple' },
            { label: 'Unique' }
          ]
        },
        { 
          label: 'Top Industries', 
          children: [
            { label: 'View Child Pages Of AI' },
            { label: 'Popular Keywords' },
            { label: 'Top Industries' },
            { label: 'Bakery' },
            { label: 'Barber' },
            { label: 'Beauty' },
            { label: 'Cleaning' },
            { label: 'Cleaning Service' },
            { label: 'Construction' },
            { label: 'Electrician' },
            { label: 'Handyman' },
            { label: 'Insurance' },
            { label: 'Landscaping' },
            { label: 'Lawyer' },
            { label: 'Photography' },
            { label: 'Real Estate' },
            { label: 'Restaurant' }
          ]
        }
      ]
    },
    { 
      label: 'Social', 
      children: [
        { 
          label: 'Social Media Covers', 
          children: [
            { label: 'Facebook Covers' },
            { label: 'YouTube Banners' },
            { label: 'Twitch Banners' },
            { label: 'LinkedIn Banners' },
            { label: 'Facebook Event Covers' },
            { label: 'SoundCloud Banners' },
            { label: 'Twitter Headers' },
            { label: 'Pinterest Board Covers' },
            { label: 'Zoom Backgrounds' },
            { label: 'Etsy Banners' },
            { label: 'Tumblr Banners' }
          ]
        },
        { 
          label: 'Social Media Posts', 
          children: [
            { label: 'Instagram Posts' },
            { label: 'Instagram Stories' },
            { label: 'Facebook Posts' },
            { label: 'Facebook Stories' },
            { label: 'Facebook Ads' },
            { label: 'Twitter Posts' },
            { label: 'LinkedIn Posts' },
            { label: 'Pinterest Pins' },
            { label: 'TikTok Videos' },
            { label: 'Instagram Reels' },
            { label: 'YouTube Shorts' },
            { label: 'YouTube Videos' },
            { label: 'WhatsApp Stories' },
            { label: 'Snapchat Designs' }
          ]
        },
        { 
          label: 'Social Media Profile Pictures', 
          children: [
            { label: 'Facebook Profile Pictures' },
            { label: 'Instagram Profile Pictures' },
            { label: 'LinkedIn Profile Pictures' },
            { label: 'Pinterest Profile Pictures' },
            { label: 'SoundCloud Profile Pictures' },
            { label: 'Tumblr Profile Pictures' },
            { label: 'Twitch Profile Pictures' },
            { label: 'YouTube Channel Icons' }
          ]
        }
      ]
    },
    { 
      label: 'Websites',
      children: [
        { label: 'View Child Pages Of Websites' },
        { label: 'Website Builder' },
        { label: 'Link in Bio' },
        { label: 'Digital Business Cards' },
        { label: 'Domain Names' }
      ]
    },
    { 
      label: 'More', 
      children: [
        { label: 'Popular Keywords' }, 
        { label: 'Top Industries' },
        { label: 'Email Signatures' },
        { label: 'Letterheads' },
        { label: 'Posters' },
        { label: 'Flyers' },
        { label: 'Invoices' },
        { label: 'Menus' },
        { label: 'Postcards' },
        { label: 'Gift Certificates' },
        { label: 'Invitations' },
        { label: 'Thank You Cards' },
        { label: 'Videos' },
        { label: 'Animations' },
        { label: 'T-Shirts' },
        { label: 'QR Codes' },
        { label: 'Presentations' }
      ] 
    },
    { 
      label: 'AI',
      children: [
        { label: 'AI Logo Generator' },
        { label: 'AI Background Remover' },
        { label: 'AI Business Name Generator' },
        { label: 'AI Domain Name Generator' },
        { label: 'AI Website Generator' },
        { label: 'AI Business Card Generator' },
        { label: 'AI Poster Generator' },
        { label: 'AI Flyer Generator' },
        { label: 'AI Link In Bio Generator' }
      ]
    }
  ];

  currentMenu: MenuItem[] = this.mainMenu;
  menuStack: MenuItem[][] = [];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Show or hide menu
  }

  navigateTo(item: MenuItem) {
    if (item.children) {
      this.menuStack.push(this.currentMenu); // Save previous menu
      this.currentMenu = item.children; // Show sub-menu
    }
  }
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // Adds shadow after 50px scroll
  }

  goBack() {
    if (this.menuStack.length) {
      this.currentMenu = this.menuStack.pop()!; // Go back to previous menu
    }
  }
  logos: string[] = [
    'assets/65f2ff2c3b16f6fa8aaf22dc_2560px-Uber_logo_2018 2.svg',
    'assets/65f2ff2ccea2512735e4cd84_cjtibk8zo01qa4og0osvhxx09-screens-and-zoom-car 2.svg',
    'assets/65f2ff2cdf45b1882b536840_Godaddy-logo.svg',
    'assets/65f2ff9e229c6ef3ed933738_Group 44275 (1).svg',
    'assets/65fc26e3c64c8a1acca4f465_Byjus_logo.svg',
    'assets/65fc26e4b4101dd05febc721_zynga_box_wide.svg',
    'assets/65fc26e45e44bca96ca85dfb_Pocket_fm_logo_(1).svg-p-500.png',
    'assets/65fc26e464c7b99ec404f753_Screenshot 2024-03-21 at 5.51.37 PM-p-500.png',
    'assets/65fc26e4833579ae70ea996b_TATA_1mg_Logo.svg-p-500.png',
    'assets/65fc26e3260243154c3a03c9_Adobe_Corporate_logo.svg',
    'assets/65fc28c559858f314ab24c11_toko.svg',
    'assets/65fc28727c049f14eefd51ec_logo-final-p-500.png',
    'assets/65fc290546e5022e2eed83f0_Gojek_logo_2022.svg',
    'assets/67cabbf40eef5aedf3b64eb9_Union.svg',
    'assets/660c0a07bd98ff0c1a082477_lo.png',
    'assets/660c0a6361768bf0bce29d0c_Tally-Logo-PNG-HD.png',
    'assets/666c01b4896ac2b0b1c961d4_Group 44785-min-p-500.png'
  ];
  
  position: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.position -= 1; // Adjust for speed
      if (Math.abs(this.position) >= 300) {
        this.position = 0; // Reset position after some movement
      }
    }, 35); // Adjust speed with interval
  }
  // toggleDarkMode() {
  //   document.documentElement.classList.toggle('my-app-dark');
  // }
  // toggleDarkMode() {
  //   const element = document.querySelector('body');
  //   element?.classList.toggle('my-app-dark');
  //   document.body.classList.toggle('dark-theme');
  // }
  // toggleDarkMode() {
  //   document.body.classList.toggle('dark-theme');
  // }
  isDarkMode: boolean = false;

  toggleDarkMode() {
    const element = document.querySelector('body');
    element?.classList.toggle('my-app-dark');
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }


}
