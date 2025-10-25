import Image from "next/image";
import buyPhone from "@/svg/buyPhone.svg";
import call from "@/svg/call.svg";

function BuyWithPhone() {
  return (
    <div className="w-[327px] h-[190px] mt-9 mx-auto border-1 border-gray-300 rounded-lg md:w-[1188px] md:h-[250px] md:flex-reverse">
      <div className="bg-[#28A745] w-full h-[128px] rounded-t-lg relative md:w-6/8 md:h-full ">
        <div className="flex">
          <Image
            src={buyPhone}
            width={198}
            height={120}
            priority
            className="mt-[-32px] md:mt-[88px]"
            alt="buy phone"
          />
          <div className="text-right pt-3 text-white justify-end absolute right-3">
            <p className="text-[22px] font-medium whitespace-nowrap ">
              خرید تلفنی از <span className="text-[#10411B]"> تورینو </span>
            </p>
            <p className="font-thin pt-2"> !به هرکجا که میخواهید </p>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <div className="flex justify-center gap-x-10 pt-4">
          <button className="bg-[#10411B] ronded-lg text-white font-thin text-[14px] rounded-lg px-5 py-1">اطلاعات بیشتر</button>

          <div className="flex gap-x-2">
            <Image src={call} width={20} height={20} alt="phone"/>
            <span className=" text-[20px] font-semibold ">021-1840</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyWithPhone;
