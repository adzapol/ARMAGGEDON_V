import React, { useState } from 'react'

// Аватар
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

// import Box from '@material-ui/core/Box'





import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
}));



const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
})(MuiAccordion);
  
const AccordionSummary = withStyles({
root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
    minHeight: 56,
    },
},
content: {
    '&$expanded': {
    margin: '12px 0',
    },
},
expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
root: {
    padding: theme.spacing(2),
},
}))(MuiAccordionDetails);


function Contact() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <div>
            <div className={classes.root}>
                <Avatar alt="Alex Zapol" src="./images/avatar.jpg" className={classes.large} />
            </div>


            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Обо мне</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <p>Привет! Меня зовут Александр мне 27 лет, и я начинающий Frontend developer. На сегодняшний день я уже более полугода занимаюсь активным самообучением. Несмотря на небольшой срок, я решительно настроен добиться высоких результатов в этой профессии. Думаю, что совместная работа с Вами принесет общий профит.</p>
                    <p>В копилке:<br />
                        - 1300+ пройденных заданий HTML Academy<br />
                        - JavaScript для детей (Н. Морган)<br />
                        - Изучаем программирование на JavaScript (Э. Фримен, Э. Робсон)<br />
                        - Как устроен JavaScript (Д. Крокфорд)<br />
                        - ECMAScript 6 для разработчиков (Н. Закас)<br />

                        На досуге читаю – Совершенный код (С. Макконнелл)
                    </p>
                    <br />
                    <a href="./files/CV.pdf" target="_blank" rel="noreferrer">Резюме</a>
                </Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography>О задании</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <p>К сожалению, мне не удалось реализовать некоторые функции, представленные в тестовом задании, но моя работа над этим сайтом не закончена. Я обязательно их доделаю (Lazy load, вывод глубоко вложенных данных астеройдов, список на уничтожение, бригада им. Брюса Уиллиса). Спасибо за предоставленное задание и уделенное время! </p>
                </Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Email</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <p>adzapol13@gmail.com</p>
                </Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                <Typography>Телефон</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <p>+7 915 517 41 35</p>
                </Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                <Typography>Мессендеры</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <p>
                        WhatApp: +7 951 311 45 15 <br />
                        Telegram: @adzapol <br />
                        vk: <a href="https://vk.com/adzplsky" target="_blank" rel="noreferrer">adzplsky</a>
                    </p>
                </Typography>
            </AccordionDetails>
            </Accordion>
      </div>
    )
}


export default Contact