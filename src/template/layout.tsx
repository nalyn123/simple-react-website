import { SampleImg } from "@assets/images";
import { Footer, Modal, ModalProvider, Navbar } from "@components/index";
import { ComponentType, useLayoutEffect } from "react";

const Layout = ({ component: Component }: { component: ComponentType }) => {
  const data = {
    component: <img className="w-full" src={SampleImg} alt="" />,
  };

  useLayoutEffect(() => {
    Modal.show(data);
  }, []);

  return (
    <>
      <Navbar />
      <Component />
      <ModalProvider />
      <Footer />
    </>
  );
};

export default Layout;
