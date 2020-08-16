import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';

//import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

//Importando os CSS
import './styles.css';





function TeacherList() {
    //Salvando lista de professores
    const [teachers, setTeachers] = useState([]);

    //criando estdos
    const [suject, setSuject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    //Buscar
   async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        //Buscar no banco
       const response = await api.get('classes', {
            params: {
                suject,
                week_day,
                time,  
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponíveis.">
               <form id="search-teachers" onSubmit={searchTeachers}>

                    <Select 
                        name="suject" 
                        label="Matéria"
                        value={suject}
                        onChange={(e) => {setSuject(e.target.value)}}
                        options= {[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Educação Fisica', label: 'Educação Fisica'},
                            {value: 'Fisica', label: 'Fisica'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'História', label: 'História'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Quimíca', label: 'Quimíca'},
                        ]}
                    />

                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => {setWeekDay(e.target.value)}}
                        options= {[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feira'},
                            {value: '6', label: 'Sábado'},
                        ]}
                    />  

                    <Input 
                        type="time"
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value)
                        }}
                    />

                <button type="submit">
                    Buscar
                </button>

               </form>
           </PageHeader>  
            <main>
                {teachers.map((teacher: Teacher )=> {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    )
}

export default TeacherList;
