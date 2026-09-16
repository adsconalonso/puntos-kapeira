document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('category-nav');
    const menuContainer = document.getElementById('menu-container');

    // Render Navigation and Content
    menuData.forEach((categoryData, index) => {
        const catId = `category-${index}`;

        // 1. Create Nav Button
        const btn = document.createElement('button');
        btn.className = `nav-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = categoryData.category;
        btn.dataset.target = catId;
        
        btn.addEventListener('click', () => {
            const targetSection = document.getElementById(catId);
            const navHeight = navContainer.offsetHeight;
            const topPos = targetSection.getBoundingClientRect().top + window.scrollY - navHeight - 20;
            
            window.scrollTo({
                top: topPos,
                behavior: 'smooth'
            });
        });
        
        navContainer.appendChild(btn);

        // 2. Create Section
        const section = document.createElement('section');
        section.id = catId;
        section.className = 'category-section';

        // Category Title
        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = categoryData.category;
        section.appendChild(title);

        // Category Description (optional)
        if (categoryData.description) {
            const desc = document.createElement('p');
            desc.className = 'category-desc';
            desc.textContent = categoryData.description;
            section.appendChild(desc);
        }

        // Subcategories or Items
        if (categoryData.subcategories) {
            categoryData.subcategories.forEach(sub => {
                const subDiv = document.createElement('div');
                subDiv.className = 'subcategory';

                const subTitle = document.createElement('h3');
                subTitle.className = 'subcategory-title';
                subTitle.textContent = sub.name;
                subDiv.appendChild(subTitle);

                const itemsGrid = document.createElement('div');
                itemsGrid.className = 'items-grid';
                
                sub.items.forEach(item => {
                    itemsGrid.appendChild(createItemCard(item));
                });

                subDiv.appendChild(itemsGrid);
                section.appendChild(subDiv);
            });
        } else if (categoryData.items) {
            const itemsGrid = document.createElement('div');
            itemsGrid.className = 'items-grid';
            
            // Special styling for combos
            const isCombo = categoryData.category.toLowerCase().includes('combo');
            
            categoryData.items.forEach(item => {
                itemsGrid.appendChild(createItemCard(item, isCombo));
            });
            section.appendChild(itemsGrid);
        }

        menuContainer.appendChild(section);
    });

    // Helper Function to Create Item Cards
    function createItemCard(item, isCombo = false) {
        const card = document.createElement('div');
        card.className = `menu-item ${isCombo ? 'combo-item' : ''}`;

        let priceHtml = '';
        if (item.originalPrice) {
            priceHtml += `<span class="original-price">${item.originalPrice}</span>`;
        }
        priceHtml += `<span class="item-price">${item.price}</span>`;

        let headerHtml = `
            <div class="item-header">
                <div class="item-name">${item.name}</div>
                <div class="item-price-container">${priceHtml}</div>
            </div>
        `;

        let bodyHtml = '';
        if (item.description) {
            bodyHtml += `<div class="item-desc">${item.description}</div>`;
        }
        if (item.save) {
            bodyHtml += `<div class="save-badge">${item.save}</div>`;
        }

        card.innerHTML = headerHtml + bodyHtml;
        return card;
    }

    // Scroll Spy for Navigation Active State
    const sections = document.querySelectorAll('.category-section');
    const navButtons = document.querySelectorAll('.nav-btn');

    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active from all
                navButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active to current
                const activeBtn = document.querySelector(`.nav-btn[data-target="${entry.target.id}"]`);
                if (activeBtn) {
                    activeBtn.classList.add('active');
                    
                    // Smoothly scroll the nav container so the active button is visible
                    const navRect = navContainer.getBoundingClientRect();
                    const btnRect = activeBtn.getBoundingClientRect();
                    
                    if (btnRect.left < navRect.left || btnRect.right > navRect.right) {
                        navContainer.scrollTo({
                            left: activeBtn.offsetLeft - 20,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});
