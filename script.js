 function filterSuggestions() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const suggestions = document.getElementById('suggestions');
            const table = document.getElementById('studentTable');
            const rows = table.getElementsByTagName('tr');
            let found = false;

           
            suggestions.innerHTML = '';
            suggestions.style.display = 'none';

           
            if (input === '') {
                Array.from(rows).forEach(row => {
                    row.style.display = '';
                });
                return;
            }

            suggestions.style.display = 'block';

            
            Array.from(rows).forEach((row, index) => {
                const cells = row.getElementsByTagName('td');
                const nameCell = cells[1] || null; 
                if (nameCell) {
                    const name = nameCell.textContent.toLowerCase();
                    if (name.includes(input)) {
                        found = true;
                       
                        const suggestionItem = document.createElement('div');
                        suggestionItem.className = 'suggestion-item';
                        suggestionItem.textContent = nameCell.textContent;
                        suggestionItem.onclick = () => {
                            document.getElementById('searchInput').value = nameCell.textContent;
                            filterTable(nameCell.textContent);
                            playAudio(nameCell.textContent);
                            suggestions.style.display = 'none';
                        };
                        suggestions.appendChild(suggestionItem);
                    }
                }
            });

            
            if (!found) {
                const noMatch = document.createElement('div');
                noMatch.className = 'suggestion-item';
                noMatch.textContent = 'រកមិនឃើញឈ្មោះដែលត្រូវគ្នាទេ។';
                noMatch.style.color = 'red';
                suggestions.appendChild(noMatch);
            }
        }

        function filterTable(name) {
            const table = document.getElementById('studentTable');
            const rows = table.getElementsByTagName('tr');
            let found = false;

            Array.from(rows).forEach(row => {
                const cells = row.getElementsByTagName('td');
                const nameCell = cells[1] || null; 

                if (nameCell) {
                    if (nameCell.textContent.includes(name)) {
                        row.style.display = '';
                        found = true;
                    } else {
                        row.style.display = 'none';
                    }
                }
            });

           
            if (!found) {
                alert('No matching names found');
            }
        }
 //  chhin siev mey ❤️
        function playAudio(name) {
            const audioMap = {
                'ឈិន សៀវមុី'    : 'audio/mey.wav',
                'កឹម វេត'       : 'audio/',
                'កុល គឹមលី'     : 'audio/',
                'កោះ សុវណ្ណបញ្ញា' : 'audio/',
                'ខឿន ពិសិដ្ឋ'    : 'audio/',
                'គង់ភាង ភារម្យ' : 'audio/',
                'គា ល័យ'       : 'audio/',
                'គ្នា រស្មី'        : 'audio/',
                'គឹម នីសា'     : 'audio/',
                'ឃន សុភ័ក្ត'    : 'audio/',
                'ឃៀន ចំរើន'   : 'audio/',
                'ងឹម សុខកែវ'   : 'audio/',
                'ចក់ កែវ'      : 'audio/',
                'ចន សុីណា'    : 'audio/',
                'ចន ស្រីកា'    :'audio/',
                'ចាន់ រស្មី'     : 'audio/',
                'ឆេង រ៉ានី'     : 'audio/',
                'ជា សុកន'     : 'audio/',
                'ជុន មីនា'      :'audio/',
                'ជឿន ណារី'     : 'audio/',
                'ឈិន អឿយ'     : 'audio/',
                'ញ៉ ថៃលីន'       : 'audio/',
                'ញ៉ ស្រីពៅ'        :'audio/',
                'ញឹម បូរ៉ា'        : 'audio/',
                'ដាង ធីម'      : 'audio/',
                'តេង ម៉ារី'      :'audio/',
                'ទិន ស្រីពេជ្រ'   : 'audio/',
                'នន ហេង'     : 'audio/',
                'នាង ស្រីនិច'   :'audio/',
                'នី ស្រ៑'        : 'audio/',
                'នេន ស្រីពេជ្រ'  : 'audio/',
                'នៅ ឆាយដេត'    :'audio/',
                'ប្រស ណាវីន'       : 'audio/',
                'ប៉ាន់ ស្រីណាត់'      :'audio/',
                'បុិច សំណាន'       : 'audio/',
                'ប៑ូ មិថុនា'        : 'audio/',
                'ផាន់ ពេព្យ'      : 'audio/',
                'ភី ម៉ូនីកា'       : 'audio/',
                'ភឹម ចិត្រា'      : 'audio/',
                'ម៉ម ដាវីត'     : 'audio/',
                'ម៉ាន ប៑ុនលី'   : 'audio/',
                'ម៉ៅ ភូ'      : 'audio/',
                'មុំ ឃះសី'    : 'audio/',
                'មៃ រចនា'    : 'audio/',
                'យ៉ា គឹមលាង'   :'audio/',
                'រេត ដាវ៉ាន់'      : 'audio/',
                'រុឹម ចាន់រចណា'    : 'audio/',
                'រី នីត្ត'            : 'audio/',
                'លន រក្សា'        : 'audio/',
                'សន វិលា'       : 'audio/',
                'ស៑ង សុភ័ណ្ឌ'   : 'audio/',
                'សុិន ស្រីនីត  ': 'audio/',
                
                
            };

            const audioSrc = audioMap[name];
            if (audioSrc) {
                const audio = new Audio(audioSrc);
                audio.play();
            }
        }

       
        function setRowNumbers() {
            const table = document.getElementById('studentTable');
            const rows = table.getElementsByTagName('tr');

            Array.from(rows).forEach((row, index) => {
                if (index > 0) { 
                    const cell = row.getElementsByTagName('td')[0];
                    cell.textContent = index;
                }
            });
        }

     
        window.onload = setRowNumbers;

    window.addEventListener("load", function(){
        setTimeout(function(){
            document.querySelector(".loader-wrapper").style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 1000); 
    });
