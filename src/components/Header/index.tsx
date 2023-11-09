import todoLogo from "../../assets/Logo.svg"
import { AiOutlinePlusCircle } from 'react-icons/ai'

import sytles from './header.module.css'
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const[title, setTitle] = useState("");


    function handleSubmit(event: FormEvent){
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }


    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value);
    }

    return (
        <header className={sytles.header}>
            <img src={todoLogo} />

            <form className={sytles.newTaskForm} onSubmit={handleSubmit}>
                <input placeholder="Adicione uma nova tarefa" onChange={onChangeTitle} value={title}/>
                <button>
                    Criar
                    <AiOutlinePlusCircle size={22} />
                </button>
            </form>
        </header>
    )
}