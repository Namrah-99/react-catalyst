import lightlogo from "../../assets/images/light-logo.png";
import MyLink from "../components/common/MyLink";

export default function Logo() {
  return (
    <div className="w-20 title-font items-center">
      <MyLink text="" to="/">
        <img
          src={lightlogo}
          alt="logo"
          className="w-full object-cover object-center"
        />
      </MyLink>
    </div>
  );
}
