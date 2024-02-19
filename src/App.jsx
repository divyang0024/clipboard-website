import { useState } from "react";
import "./index.css";
import Logo from "../images/logo.svg";
import imageComputer from "../images/image-computer.png";
import imageDevices from "../images/image-devices.png";
import iconBlacklist from "../images/icon-blacklist.svg";
import iconText from "../images/icon-text.svg";
import iconPreview from "../images/icon-preview.svg";
import logoGoogle from "../images/logo-google.png";
import logoIbm from "../images/logo-ibm.png";
import logoMicrosoft from "../images/logo-microsoft.png";
import logoHp from "../images/logo-hp.png";
import logoVg from "../images/logo-vector-graphics.png";
import iconFacebook from "../images/icon-facebook.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconInstagram from "../images/icon-instagram.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="hero">
        <div className="pt-16 px-10">
          <img src={Logo} className="mx-auto my-16" />
          <h3>A history of everything you copy</h3>

          <p className="headPara">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>

          <div className="flex flex-col md:flex-row gap-6 mt-8 items-center md:justify-center">
            <button className="bg-strongCyan px-8 p-4 text-white text-xl rounded-full shadow-lg hover:opacity-80 duration-200">
              Download for iOS
            </button>
            <button className="bg-lightBlue px-8 p-4 text-white text-xl rounded-full shadow-lg hover:opacity-80 duration-200">
              Download for Mac
            </button>
          </div>
        </div>
      </section>
      <section id="snippet">
        <div className="my-28 px-10">
          <h3>Keep track of your snippets</h3>
          <p className="snippetPara">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
          <div className="flex flex-col mt-24 md:flex-row gap-12 justify-center">
            <div className="md:flex md:items-center">
              <img src={imageComputer} className="md:relative md:left-[-20%]" />
            </div>
            <div className="flex flex-col justify-center gap-8">
              <div>
                <h4>Quick Search</h4>
                <p className="snippetBoolets">
                  Easily search your snippets by content, category, web address,
                  application, and more
                </p>
              </div>
              <div>
                <h4>iCloud Sync</h4>
                <p className="snippetBoolets">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div>
                <h4>Completely History</h4>
                <p className="snippetBoolets">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="access">
        <div class="px-10">
          <h3 className="">Access Clipboard Anywhere</h3>
          <p className="snippetPara">
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img src={imageDevices} className="mx-auto mt-8" />
        </div>
      </section>

      <section className="supercharge">
        <div className="px-10 my-24 space-y-12">
          <div>
            <h3>Supercharge your workflow</h3>
            <p className="snippetPara">
              We've got the tools to boost your productivity.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:justify-center">
            <div className="space-y-6">
              <img src={iconBlacklist} className="mx-auto" />
              <h4 className="text-center">Create Blacklists</h4>
              <p className="snippetBoolets text-center">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="space-y-6">
              <img src={iconText} className="mx-auto" />
              <h4 className="text-center">Plain Text Snippets</h4>
              <p className="snippetBoolets text-center">
                Remove unwanted formatting from copied text for a consistent
                look. hic!
              </p>
            </div>
            <div className="space-y-6">
              <img src={iconPreview} className="mx-auto" />
              <h4 className="text-center">Sneak Preview</h4>
              <p className="snippetBoolets text-center">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="companies">
        <div className="px-10 my-28 flex flex-col md:flex-row items-center justify-center gap-12 flex-wrap">
          <img src={logoGoogle} alt="" />
          <img src={logoIbm} alt="" />
          <img src={logoMicrosoft} alt="" />
          <img src={logoHp} alt="" />
          <img src={logoVg} alt="" />
        </div>
      </section>
      <section>
        <div className="px-10 my-28">
          <h3>Clipboard for iOS and MacOS</h3>
          <p className="headPara">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>

          <div className="flex flex-col md:flex-row gap-6 mt-8 items-center md:justify-center">
            <button className="bg-strongCyan px-8 p-4 text-white text-xl rounded-full shadow-lg hover:opacity-80 duration-200">
              Download for iOS
            </button>
            <button className="bg-lightBlue px-8 p-4 text-white text-xl rounded-full shadow-lg hover:opacity-80 duration-200">
              Download for Mac
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-gray-50">
        <div className="mt-28 px-10 py-10 flex flex-col md:flex-row gap-8 md:justify-between md:gap-8">
          <div>
            <img src={Logo} className="mx-auto w-[75px]" />
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-8 md:justify-center">
            <p className="snippetBoolets ficon">FAQs</p>
            <p className="snippetBoolets ficon">Contact Us</p>
            <p className="snippetBoolets ficon">Privacy Policy</p>
            <p className="snippetBoolets ficon">Press Kit</p>
            <p className="snippetBoolets ficon">Install Guide</p>
          </div>
          <div className="flex justify-center items-center gap-8">
            <img src={iconFacebook} alt="" class="duration-200 ficon" />
            <img src={iconTwitter} alt="" class="duration-200 ficon" />
            <img src={iconInstagram} alt="" class="duration-200 ficon" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
