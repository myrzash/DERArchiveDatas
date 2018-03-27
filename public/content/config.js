const DATAS = {
    ru: {
        title: "Архивация файлов",
        grade: "7 Класс",
        typeder: "Интерактивная лекция",
        prologue: {
            author: 'Ken Thompson, один из отцов ОС Unix',
            phrase: 'Отсутствие свободного места - вот стабильное состояние дисков.',
        },
        parts:
            [
                {
                    title: 'Изучи',
                    image: 'part1.png',
                    info: 'Изучение данного раздела поможет тебе узнать о том, что такое архивация данных.',
                    interactive: {
                        name: 'lecture',
                        items: {
                            videos: [
                                {
                                    title: 'Введение',
                                    src: 'public/archive1.mov',
                                    header: 'Мы с вами знаем, что при работе с информацией очень часто встречаются случаи, когда файлы, предназначенные для хранения или перемещения, не вмещаются на носитель информации или не соответствуют требуемому объему.',
                                }, {
                                    title: 'Компьютеры в сети',
                                    src: 'public/internet.mp4',
                                    text: 'Такая же проблема возникает и при работе в сети Интернет – во время передачи данных или размещении их на определенном ресурсе.',
                                }, {
                                    title: 'Сжатие данных',
                                    header: 'Что же делать в этом случае? Можно ли уменьшить размер файла, не теряя содержащуюся в нем информацию?',
                                    text: 'Решение этой проблемы заключается в сжатии данных. Целью сжатия данных является обеспечение более компактного размещения информации на носителе, сокращение времени и соответственно стоимости передачи информации по каналам связи в компьютерных сетях. Кроме того, упаковка в один архивный файл группы файлов существенно упрощает их перенос с одного компьютера на другой, сокращает время копирования файлов на диски, позволяет защитить информацию от несанкционированного доступа. \n' +
                                    'Процесс сжатия данных можно выполнить при помощи мощных и функциональных программ-архиваторов, разработчики которых предлагают пользователям различные методы для обработки данных. \n' +
                                    'Из числа наиболее популярных программ можно выделить: WinRAR и 7-Zip.',
                                },
                            ],
                            remember: [
                                {
                                    text: '<ul><li>Упаковка (архивация) – это сжатие, уплотнение, упаковка информации.</li>' +
                                    '<li>Разархивация - процесс восстановления файлов из архива точно в таком виде, какой они имели до загрузки в архив. При распаковке файлы извлекаются из архива и помещаются на диск.</li>' +
                                    '<li>Архивный файл – это специальным образом организованный файл, содержащий в себе один или несколько файлов в сжатом или несжатом виде и служебную информацию (имена файлов, дата и время их создания, размер и т.д.)</li>' +
                                    '<li>Архиваторы – это программы, реализующие процесс архивации, позволяющие создавать и распаковывать архивы.</li>' +
                                    '<li>Степень сжатия информации – это один из важнейших показателей архива. Характеризуется коэффициентом Кс, определяемым как отношение объема сжатого файла Vс к объему исходного файла V0, выраженное в процентах (%).</li>' +
                                    '</ul>'
                                }
                            ],
                        }
                    }
                },
                {
                    title: 'Это интересно!',
                    image: 'part2.png',
                    info: 'Знаешь ли ты, кто является создателем программы – архиватора?',
                    interactive: {
                        name: 'lecture',
                        items: {
                            images: [
                                {
                                    title: 'Евгений Лазаревич Рошал',
                                    text: 'Евгений Лазаревич Рошал придумал и разработал легендарные архиваторы RAR и WinRAR, знакомые всем пользователям компьютера. В названии программы присутствуют инициалы ее создателя: \n' +
                                    'RAR означает Roshal Archiver. Первую версию программы Рошал презентовал в 1993-м, когда ему исполнился 21 год. Она была создана для работы с ОС DOS. За прошедшие годы было выпущено множество версий программы. \n',
                                    src: 'public/roshal.png',
                                    heightImage: 400
                                },
                                {
                                    text: 'В настоящее время Евгений Рошал живет и работает в США. Он занимается разработкой новых версий своего архиватора, обновлением программы и ее адаптацией под современные условия.',
                                    src: 'public/roshalNow.png',
                                    heightImage: 320
                                }
                            ],
                            videos: [
                                {
                                    title: '',
                                    text: 'WinRAR считается одним из лучших архиваторов в мире. ',
                                    header: 'Посмотри видеоролик о том, как скачать и установить бесплатно версию на 40 дней',
                                    src: 'public/multimedia.mp4'
                                }
                            ]
                        }
                    }
                },
                {
                    title: 'Проверь себя',
                    image: 'part3.png',
                    info: 'Пройди небольшой тест и узнай насколько ты усвоил материал',
                    interactive: {
                        name: 'inputText',
                        items: {
                            downloadFile: 'Скачать файл',
                            downloadArchive: 'Скачать архив',
                            fileSize: 'Размер файла (байт)',
                            instruction: 'Cкачай файлы и вычисли коэффициент сжатия',
                            archiveSize: 'Размер архива (байт)',
                            coefficient: 'Коэффициент сжатия (%)',
                            remember: [
                                {
                                    text: '<p>Степень сжатия характеризуется коэффициентом сжатия: </p>\n' +
                                    '<div class="text-xs-center ma-5" style="font-size: 1.5em;">\n' +
                                    'K = V <sub>c</sub> / V <sub>u</sub>⋅100%\n' +
                                    '</div>\n' +
                                    '<p>V <sub>c</sub> - объем сжатого файла, </p>\n' +
                                    '<p>V <sub>u</sub> - объем исходного файла</p>'
                                }
                            ],
                        }
                    },
                },
            ]
    },
    kz: {
        title: "Файлдарды архивтеу",
        grade: "7-сынып",
        typeder: "Интерактивті лекция",
        prologue: {
            author: 'Кен Томсон',
            phrase: 'Дискінің тұрақты жағдайы бос орынның болуы.',
        },
        parts:
            [
                {
                    title: 'Ізден',
                    image: 'part1.png',
                    info: 'Осы бөлімді зерттеу деректерді архивтеу дегеніміз не екендігі туралы білуге көмектеседі.',
                    interactive: {
                        name: 'lecture',
                        items: {
                            videos: [
                                {
                                    title: 'Кіріспе',
                                    src: 'public/archive1.mov',
                                    header: 'Ақпараттармен жұмыс жасау кезінде сақтауға немесе тасымалдауға арналған файлдар ақпарат тасымалдағышқа сыймайтын немесе талап етілетін көлемге сәйкес келмейтін жағдайлар өте жиі кездесетіндігін жақсы білеміз.',
                                }, {
                                    src: 'public/internet.mp4',
                                    text: 'Интернет желісінде жұмыс жасау – деректерді жіберу немесе оларды белгілі бір ресурсқа орналастыру кезінде де осындай қиындық туындайды. ',
                                }, {
                                    header: 'Бұл жағдайда не істеу керек? Құрамындағы ақпаратты жоғалтпай, файл өлшемін азайтуға болады ма?',
                                    text: 'Бұл мәселені шешу деректерді сығумен шешіледі. Деректерді сығу мақсаты болып ақпаратты тасымалдағышқа барынша ықшам орналастыру, уақытты қысқарту және сәйкесінше ақпаратты компьютер желілеріндегі байланыс каналдары арқылы жіберу құны табылады. Оның үстіне, файлдар тобын бір архив файлға қаптау оны бір компьютерден екіншісіне тасымалдауды жеңілдетеді, файлдарды дисктерге көшіру уақытын қысқартады, ақпараттарды рұқсат етілмеген қатынаудан қорғауға мүмкіндік береді. \n' +
                                    'Деректерді сығу процесін күшті әрі функционалды архиватор программалар көмегімен орындауға болады, оларды жасаушылар пайдаланушыларға деректерді өңдеудің түрлі әдістерін ұсынады. \n' +
                                    'Ең танымал программалар қатарынан келесілерді атап өтуге болады: WinRAR және 7-Zip.',
                                },
                            ],
                            remember: [
                                {
                                    text: '<ul><li>Қаптау (архивтеу) – бұл ақпаратты сығу, нығыздау, қаптау.</li>' +
                                    '<li>Архивтен шығару - файлды архивке жүктегенге дейін болған түрде архивтен қалына келтіру процессі. Қаптамадан алу езінде файл архивтен алынады және дискке орналасады.</li>' +
                                    '<li>Архивттелген файл – бұл сығылған немесе сығылмаған түрдегі бір немесе бірнеше файлдан және қызметтік ақпараттан (файлдардың аттары, оларды жасау күні мен уақыты, өлшемі және т.б.) тұратын арнайы тәсілмен ұйымдастырылған файл.</li>' +
                                    '<li>Архиваторлар – бұл архивтеу процесін іске асыратын, архивтер жасауға және қаптамадан алуға мүмкіндік беретін программалар.</li>' +
                                    '<li>Ақпаратты сығу дәрежесі – бұл архивтің маңызды көрсеткіштерінің бірі. Сығылған файл көлемінің Vс бастапқы файл көлеміне V0 қатынасы ретінде анықталған, пайызбен (%) өрнектелген коэффициентпен Кс сипатталады.</li></ul>'
                                }
                            ],
                        }
                    }
                },
                {
                    title: 'Өте қызық!',
                    image: 'part2.png',
                    info: 'Архиватор программасын кімнің жасағандығын білесің бе?',
                    interactive: {
                        name: 'lecture',
                        items: {
                            images: [
                                {
                                    title: 'Евгений Лазаревич Рошал',
                                    text: 'Евгений Лазаревич Рошал компьютер пайдаланушыларының барлығына белгілі, әлемге әйгілі RAR және WinRAR архиваторларын ойлап тапты және жасап шығарды.' +
                                        'Программа атауында оны жасап шығарған адамның аты-жөні бар: RAR Roshal Archiver-ді білдіреді.' +
                                        'Программаның алғашқы нұсқасын Рошал 1993 жылы, жасы 21-ге толған кезде ұсынды. Ол DOS ОЖ-да жұмыс жасау үшін жасалды. Өткен жылдары программаның көптеген нұсқалары шығарылды.',
                                    src: 'public/roshal.png',
                                    heightImage: 400
                                },
                                {
                                    text: 'Бүгінгі таңда Евгений Рошал АҚШ-та тұрады және жұмыс жасайды. Ол өз архиваторының жаңа нұсқаларын жасаумен, программаны жаңартумен және оны заманауи жағдайларға бейімдеумен шұғылдануда.',
                                    src: 'public/roshalNow.png',
                                    heightImage: 320
                                }
                            ],
                            videos: [
                                {
                                    title: '',
                                    text: 'WinRAR әлемдегі ең жақсы архиватор болып саналады.',
                                    header: '40 күнге дейін тегін орнатуға арналған нұсқасын қалай жүктейтіні туралы бейнероликті қара',
                                    src: 'public/multimedia.mp4'
                                }
                            ]
                        }
                    }
                },
                {
                    title: 'Өзіңді тексер',
                    image: 'part3.png',
                    info: 'Материалды қаншалықты меңгергеніңді тексер. Тест сұрақтарына жауап бер.',
                    interactive: {
                        name: 'inputText',
                        items: {
                            downloadFile: 'Файлды жүктеу',
                            downloadArchive: 'Мұрағатты жүктеу',
                            fileSize: 'Файл өлшемі (байт)',
                            instruction: 'Файлды жүкте және сығу коэффициентін есепте',
                            archiveSize: 'Мұрағат өлшемі (байт)',
                            coefficient: 'Сығу коэффициенті (%)',
                            remember: [
                                {
                                    text: '<p>Сығу дәрежесі сығу коэффициентімен сипатталады: </p>\n' +
                                    '<div class="text-xs-center ma-5" style="font-size: 1.5em;">\n' +
                                    'K = V <sub>c</sub> / V <sub>u</sub>⋅100%\n' +
                                    '</div>\n' +
                                    '<p>V <sub>c</sub> - сығылған файл көлемі, </p>\n' +
                                    '<p>V <sub>u</sub> - бастапқы файл көлемі</p>'
                                }
                            ],
                        }
                    },
                },
            ]
    },
    en: {
        title: "File and Folder backup wizard",
        grade: "Grade 7",
        typeder: "On-line lecture",
        prologue: {
            author: 'Ken Thompson, co-founder of Unix OC',
            phrase: 'The lack of free space - this is the stable state of the disks'
        },
        parts:
            [
                {
                    title: 'Learn',
                    image: 'part1.png',
                    info: 'Learning of this section helps you to know what is windows backup.',
                    interactive: {
                        name: 'lecture',
                        items: {
                            videos: [
                                {
                                    src: 'public/archive1.mov',
                                    header: 'We know that when working with information we often meet cases when files assigned for storing or sending are not fitted in information carrier or are not relevant for required volume.',
                                }, {
                                    src: 'public/internet.mp4',
                                    text: 'Such problem appears and when working in Internet – during data sending or allocating them on determined resource.',
                                }, {
                                    header: 'What shall we do in this case? Is it possible to reduce size of files, not loosing content of information?',
                                    text: 'Decision of this problem is data compression.\n' +
                                    'Aim of data compression is to provide more compacted allocation of information on a carrier, time reducing and consequently cost of information sending through data links in computer networks. Moreover, packaging in one archive file of files groups reduce essentially their transferring from one computer into another one, reduce time of files copying on disks, let you to protect information from unauthorized access. \n' +
                                    'Data compression process can be performed by powerful and functional archiving programs, their implementers suggest different methods of data processing for users. From number of the most popular programs we can select: WinRAR and 7-Zip.'
                                },
                            ],
                            remember: [
                                {
                                    text: '<ul><li>Packaging (archiving) is a compression, compaction, information packaging.</li>' +
                                    '<li>Retrieval is a process of file restore from archive in exact view like they were before archiving. When file retrieval files shall be retrieved from archive and allocated in disk.</li>' +
                                    '<li>Archive file is a special organized file, contenting one or more files in compressed or not compressed view and operation information (files name, date and time of their creation, size and etc.)</li>' +
                                    '<li>Archivers are programs realizing archiving process, allowing to create and retrieve archives.</li>' +
                                    '<li>Information compression ratio is one of the important indicators of archive. It characterizes coefficient GFG determining as relations of volume of compressed file Vc to volume of source file V0, in (%).</li>' +
                                    '</ul>'
                                }
                            ],
                        }
                    }
                },
                {
                    title: 'It is interesting!',
                    image: 'part2.png',
                    info: 'Do you know that who is a creator of archiving programs?',
                    interactive: {
                        name: 'lecture',
                        items: {
                            images: [
                                {
                                    title: 'Evgeni Roshal Lazaryevich',
                                    text: 'Evgeni Roshal Lazaryevich ivented and developed legend archivers RAR and WinRAR that all computer users know. There are initials of its creator in name of program: RAR is Roshal Archiver. \n' +
                                    'Roshal presented the first version of program in 1993 when he was 21 years old.  It was created for work with OS DOS. Last years many program versions were issued.',
                                    src: 'public/roshal.png',
                                    heightImage: 400
                                },
                                {
                                    text: 'At the present time Evgenii Roshal lives and works in USA. He develops new versions of his archiver, program renew and its adapt under contemporary conditions.  ',
                                    src: 'public/roshalNow.png',
                                    heightImage: 320
                                }
                            ],
                            videos: [
                                {
                                    title: '',
                                    text: 'WinRAR is one of the best archivers in the world.',
                                    header: 'Watch a video on how to download and install a free version for 40 days',
                                    src: 'public/multimedia.mp4'
                                }
                            ]
                        }
                    }
                },
                {
                    title: 'Check yourself',
                    image: 'part3.png',
                    info: 'Pass a small test and find out how much you learned the material',
                    interactive: {
                        name: 'inputText',
                        items: {
                            downloadFile: 'Download file',
                            downloadArchive: 'Download archive',
                            fileSize: 'File size (bite)',
                            instruction: 'Download files and calculate compression ratio',
                            archiveSize: 'Archive size (bite)',
                            coefficient: 'Coefficient of compression(%)',
                            remember: [
                                {
                                    text: '<p>Compression ratio is characterized by compression coefficient:</p>\n' +
                                    '<div class="text-xs-center ma-5" style="font-size: 1.5em;">\n' +
                                    'K = V <sub>c</sub> / V <sub>u</sub>⋅100%\n' +
                                    '</div>\n' +
                                    '<p>V <sub>c</sub> - volume of compressed file, </p>\n' +
                                    '<p>V <sub>u</sub> - volume of source file</p>'
                                }
                            ],
                        }
                    },
                },
            ]
    },
}