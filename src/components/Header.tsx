export default function Header() {
  return (
    <div>
      <h1 className="relative w-screen text-center text-[2.5rem] font-light uppercase tracking-[3px] text-[#edc84b] before:absolute before:left-0 before:top-[50%] before:block before:h-[3px] before:w-[6rem] before:-translate-y-[1px] before:bg-[#edc84b] after:absolute after:right-0 after:top-[50%] after:block after:h-[3px] after:w-[6rem] after:-translate-y-[1px] after:bg-[#edc84b] vs:text-5xl vs:before:w-[7rem] vs:after:w-[7rem] xs:before:w-[8rem] xs:after:w-[8rem] md:mt-16 md:text-[4rem] lg:text-[5.2rem]">
        Fast React <br className="md:hidden" /> Pizza Co.
      </h1>
    </div>
  );
}
