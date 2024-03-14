import lightlogo from "../../assets/images/light-logo.png";

export default function Logo() {
  return (
    <>
      <a className="w-20 title-font items-center">
        <img
          src={lightlogo}
          alt="logo"
          className="w-full object-cover object-center"
        />
      </a>
    </>
  );
}
