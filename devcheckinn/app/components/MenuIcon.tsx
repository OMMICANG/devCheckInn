import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; // For navigation to Selected Item
import Image from "next/image";
// import { BiSolidPhoneCall } from "react-icons/bi";
import ThemeToggle from './ThemeToggle';
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { BiLogoTelegram } from "react-icons/bi";
import { MdAttachEmail } from "react-icons/md";
import styles from "../styles/MenuIcon.module.css"; // Import CSS module for styling

const MenuIcon: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(0); // Tracks the focused item
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Initialize router

  const items = [
     " ",
     "Rooms",
     "About",
     "Blog",
     "Restaurant", 
     "Bar", 
     " ",
    
    ]; // Example sidebar items

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const center = container.offsetHeight / 0.7;
    const items = Array.from(container.children) as HTMLElement[];
    const closestIndex = items.reduce((closest, item, index) => {
      const itemCenter =
        item.offsetTop + item.offsetHeight / 2 - container.scrollTop;
      const distance = Math.abs(itemCenter - center);
      return distance < closest.distance ? { index, distance } : closest;
    }, { index: -1, distance: Infinity });

    setFocusIndex(closestIndex.index);
  };

  //     // Handle item click and navigate to the selected page
  
    const handleItemClick = (item: string) => {
    switch (item) {
      case "Rooms":
        router.push("/rooms");
        break;
      case "About":
        router.push("/about"); // Navigate to the desired route
        break;
      case "Blog":
        router.push("blog");
        break;
      case "Restaurant":
        router.push("restaurant");
        break;
      case "Bar":
        router.push("bar");
        break;
      default:
        break;
    }
  };


  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <div
        className={`${styles.menu} ${isSidebarOpen ? styles.openMenu : ""}`}
        onClick={toggleSidebar}
      >
        <div>
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.sidebarOpen : ""
        }`}
      >
        <div className={styles.sidebarContent}
        ref={scrollContainerRef}
        >

        {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${
                index === focusIndex ? styles.focused : ""
              }`}
              style={{
                transform: `scale(${index === focusIndex ? 1.2 : 1})`,
                opacity: index === focusIndex ? 1 : 0.5,
              }}

              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}

          <div className={styles.topHeaderContainer}>

            <div>
                <Image
                src="/logo/Logo_-_Copy-removebg-preview.png" 
                alt="Check-Inn Logo"
                width={35}
                height={35}
                className={styles.logo}
                priority
                />
            </div>
          </div>
          

            <div className={styles.bottomSocialIcons}>
                <a href="https://wa.me/2348030555150" target="_blank" rel="noopener noreferrer"><TbBrandWhatsappFilled className={styles.whatsappIcon} /></a>

                <a href="https://www.instagram.com/checkinn.hotel/" target="_blank" rel="noopener noreferrer"><TbBrandInstagramFilled className={styles.instaIcon} /></a>

                <a href="mhttps://t.me/checkinnhotelsngailto:support@checkinnhotelsng.com?subject=Booking%20Enquiry&body=Hi%20Check-Inn%2C%0AI'd%20love%20to%20make%20a%20reservation..." target="_blank" rel="noopener noreferrer"><BiLogoTelegram className={styles.telegramIcon} /></a>

                <a href="mailto:support@checkinnhotelsng.com?subject=Booking%20Enquiry&body=Hi%20Check-Inn%2C%0AI'd%20love%20to%20make%20a%20reservation..." target="_blank" rel="noopener noreferrer"><MdAttachEmail /></a>
                <span className={styles.themeProvider}><ThemeToggle/></span>


            </div>
          </div>

        </div>
    </>
  );
};

export default MenuIcon;