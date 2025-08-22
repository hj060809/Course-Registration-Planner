'use client'

import { useState } from 'react'
import styles from '../login.module.css'

interface InputProps {
    placeholder: string
    type: string
    onChange?: (text: string) => void
}

interface DropdownInputProps{
    placeholder: string
    options: string[]
}

export function f(s: string){

}

export function Input({
    placeholder,
    type,
    onChange
}: InputProps) {
    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            onChange={onChange ? e => onChange(e.target.value) : undefined}
        />
    )
}

export function DropdownInput({
    placeholder,
    options
}: DropdownInputProps) {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');

    const onSelect = (i: number) => {
        setValue(options[i])
        setSelectedIndex(i)
        setIsOpen(false)
    }

    const filteredOptionIdxes = [...options.keys()].filter(i =>
        options[i].toLowerCase().includes(value.toLowerCase())
    );

    return (
        <label>
            <input
                className={styles.input}
                type="text"
                placeholder={placeholder}
                value={value}
                onBlur={() => setIsOpen(false)}
                onFocus={() => setIsOpen(true)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        onSelect(hoveredIndex)
                    } else if (e.key === 'ArrowUp' && hoveredIndex > 0) {
                        setHoveredIndex(prev => prev-1)
                    } else if (e.key === 'ArrowDown' && hoveredIndex < options.length-1) {
                        setHoveredIndex(prev => prev+1)
                    }
                }}
                onChange={e => {
                    setHoveredIndex(0)
                    setValue(e.target.value)
                    setSelectedIndex(-1)
                    setIsOpen(true)
                }}
            />
            {filteredOptionIdxes.length !== 0
            && isOpen
            && (
                <ul
                    className={styles.dropdownMenus}
                    onMouseDown={(e: { preventDefault: () => void }) => {
                        // 드롭다운 항목 클릭 시 onBlur가 발생하지 않도록 방지
                        e.preventDefault();
                    }}
                >
                {filteredOptionIdxes.map((opid, idx) => (
                    <li
                    key={idx}
                    className={`px-2 py-1 hover:bg-gray-200 cursor-pointer ${hoveredIndex === idx && "bg-gray-200"}`}
                    onClick={() => onSelect(opid)}
                    >
                    {options[opid]}
                    </li>
                ))}
                </ul>
            )}
        </label>
    )
}