import Image from "next/image";
import styles from './login.module.css'
import { DropdownInput, Input, f } from "./_components/Inputer";
import { sign, SignButton } from "./_components/SignButton";

const logoSize = 64

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>
        Welcome To<br/>
        <span
          style={{color: "#3AE359"}}
        >SKKU</span> Scheduler
      </h1>
      <div className={styles.inputs}>
        <Input
          placeholder="Name"
          type="text"
          onChange={f}
        />
        <DropdownInput
          placeholder="Major"
          options={["S1", "S2"]}
        />
        <Input
          placeholder="Student Number"
          type="text"
          onChange={f}
        />
        <DropdownInput
          placeholder="Grade"
          options={["S1", "S2"]}
        />
      </div>
      <SignButton
        value="Sign Up / Login"
        onClick={sign}
      />
      <Image
        className={styles.logo}
        src={"/logo.png"}
        alt="Logo"
        width={logoSize}
        height={logoSize}
      />
    </main>
  );
}
