"use client";

import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

const NewYearSaleModal = () => {
  const { onOpenChange } = useDisclosure();

  return (
    <Modal
      backdrop="blur"
      isDismissable={true}
      onOpenChange={onOpenChange}
      defaultOpen={true}
      className="popup my-[12.5%] h-[75%] w-fit max-w-[640px] bg-transparent shadow-none"
      classNames={{
        closeButton:
          "text-white hover:bg-red transition-all ease-in-out duration-300",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <ModalBody className="flex flex-col items-center justify-evenly text-center">
            <h2 className="headline flex flex-col gap-1">
              Greatness comes
              <br />
              <span className="font-black uppercase text-red">
                with challenges
              </span>
            </h2>
            <h3 className="subheadline font-black">
              Join the New Year&apos;s Contest
            </h3>
            <p className="text-lg font-black xl:text-3xl">
              Work on yourself for the chance to win a Prize
            </p>

            <Link href="#contest">
              <Button
                onPress={onClose}
                className="rounded-full bg-red px-8 py-2 font-bold uppercase text-white transition-all duration-300 ease-in-out hover:scale-110"
              >
                Learn more
              </Button>
            </Link>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};

export default NewYearSaleModal;
