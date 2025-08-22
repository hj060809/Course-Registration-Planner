'use client'

import styles from '../login.module.css'

interface SignButtonProps {
    value: string
    onClick: () => void
}

export function sign() {

}

export function SignButton({
    value,
    onClick
}: SignButtonProps){
    return (
        <input
        className={styles.loginBtn}
        type="button"
        value={value}
        onClick={onClick}
        />
    )
}