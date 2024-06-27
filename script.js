
    function filterSuggestions() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        const suggestions = document.getElementById('suggestions');
        const table = document.getElementById('studentTable');
        const rows = table.getElementsByTagName('tr');
        let found = false;
        
        // Clear previous suggestions
        suggestions.innerHTML = '';
        suggestions.style.display = 'none';

        // Show all rows if input is empty
        if (input === '') {
            Array.from(rows).forEach(row => {
                row.style.display = '';
            });
            return;
        }

        suggestions.style.display = 'block';

        // Filter the table rows based on the input
        Array.from(rows).forEach((row, index) => {
            const cells = row.getElementsByTagName('td');
            const nameCell = cells[1] || null; // Assuming the name is in the second column

            if (nameCell) {
                const name = nameCell.textContent.toLowerCase();
                if (name.includes(input)) {
                    found = true;
                    // Create suggestion item
                    const suggestionItem = document.createElement('div');
                    suggestionItem.className = 'suggestion-item';
                    suggestionItem.textContent = nameCell.textContent;
                    suggestionItem.onclick = () => {
                        document.getElementById('searchInput').value = nameCell.textContent;
                        filterTable(nameCell.textContent);
                        suggestions.style.display = 'none';
                    };
                    suggestions.appendChild(suggestionItem);
                }
            }
        });

        // If no suggestions found
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
            const nameCell = cells[1] || null; // Assuming the name is in the second column

            if (nameCell) {
                if (nameCell.textContent.includes(name)) {
                    row.style.display = '';
                    found = true;
                } else {
                    row.style.display = 'none';
                }
            }
        });

        // If no rows match the search
        if (!found) {
            alert('No matching names found');
        }
    }