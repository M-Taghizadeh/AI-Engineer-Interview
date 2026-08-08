/**
 * AI Engineer Interview Questions Platform - Static GitHub Pages Version
 * Core Functionality: Questions Feed, Search, Category Filters, Difficulty Filters, Sorting, Pagination, Detail Modal, Practice Quiz & FA/EN i18n
 */

document.addEventListener('DOMContentLoaded', () => {
    // State Management
    let questions = window.questionsData || [];
    let categories = window.categoriesData || [];
    
    let activeCategory = 'all';
    let activeDifficulty = 'all';
    let searchQuery = '';
    let sortOption = 'id-asc';
    let currentModalQuestionId = null;

    // Pagination State
    let currentPage = 1;
    let pageSize = 10;
    
    // Quiz State
    let quizQuestions = [];
    let quizCurrentIndex = 0;

    // LocalStorage Key for Language & Theme preferences
    const LS_THEME = 'ai_prep_theme';
    const LS_LANG = 'ai_prep_lang';

    let savedTheme = localStorage.getItem(LS_THEME) || 'dark';
    let currentLang = localStorage.getItem(LS_LANG) || 'fa';

    // Dictionary of Translations
    const translations = {
        fa: {
            siteTitle: "سوالات استخدامی",
            quizBtn: "آزمون و تمرین",
            heroTitle: "سوالات استخدامی",
            heroHighlight: "مهندس هوش مصنوعی",
            statTotalLabel: "سوال تخصصی و کلیدی",
            statRAGLabel: "معماری‌های مدرن AI",
            statSoftLabel: "رفتاری و حل مسئله",
            softSkillsShort: "مهارت‌های نرم",
            statAnswerTypeVal: "کد و دیاگرام",
            statAnswerTypeLabel: "پاسخ‌های تشریحی",
            catHeading: "دسته‌بندی موضوعی",
            diffHeading: "سطح دشواری",
            resetBtn: "بازنشانی",
            allLevels: "همه",
            beginner: "مبتدی",
            intermediate: "متوسط",
            advanced: "پیشرفته",
            allQuestions: "همه سوالات",
            searchPlaceholder: "جستجو در سوالات و مباحث...",
            sortLabel: "مرتب‌سازی:",
            sortDefault: "پیش‌فرض",
            sortDiffAsc: "سطح (مبتدی به پیشرفته)",
            sortDiffDesc: "سطح (پیشرفته به مبتدی)",
            activeFiltersLabel: "فیلترهای فعال:",
            prevBtn: "قبلی",
            nextBtn: "بعدی",
            perPage: "تعداد در صفحه:",
            emptyTitle: "هیچ سوالی یافت نشد!",
            emptyDesc: "عبارت مورد نظر یا فیلترهای انتخابی شما نتیجه‌ای نداشت. لطفاً عبارت دیگری را جستجو کنید.",
            emptyReset: "مشاهده همه سوالات",
            viewDetails: "مشاهده پاسخ کامل و نکات",
            keySummary: "خلاصه پاسخ کلیدی:",
            fullAnswer: "پاسخ تشریحی و کامل:",
            diagramTitle: "دیاگرام و گراف مفهومی:",
            codeTitle: "نمونه کد پایتون / پرامپت:",
            tipTitle: "نکته طلایی برای مصاحبه:",
            prevQuestion: "سوال قبلی",
            nextQuestion: "سوال بعدی",
            quizHeader: "سوال تمرینی",
            quizHint: "قبل از دیدن پاسخ، ابتدا ۲ دقیقه درباره پاسخ فکر کنید یا روی کاغذ خلاصه آن را بنویسید!",
            quizShowAnswer: "مشاهده پاسخ کامل",
            quizNextStep: "سوال بعدی تمرینی",
            copyright: "طراحی شده برای موفقیت شما در مصاحبه‌های هوش مصنوعی و MLOps",
            footerTag: "راهنمای جامع مصاحبه شغلی مهندس هوش مصنوعی (AI Engineer) - ویژه بازار کار",
            githubHeading: "گیت‌هاب",
            githubLabel: "مشاهده پروفایل در گیت‌هاب",
            filterBtn: "منو",
            filterMenuTitle: "منو و فیلترها",
            toolsHeading: "ابزارها و امکانات"
        },
        en: {
            siteTitle: "Interview Questions",
            quizBtn: "Practice Quiz",
            heroTitle: "Interview Questions for",
            heroHighlight: "AI Engineers",
            statTotalLabel: "Specialized Questions",
            statRAGLabel: "Modern AI Architecture",
            statSoftLabel: "Soft Skills & Behavioral",
            softSkillsShort: "Soft Skills",
            statAnswerTypeVal: "Code & Diagrams",
            statAnswerTypeLabel: "Full Explanations",
            catHeading: "Categories",
            diffHeading: "Difficulty Level",
            resetBtn: "Reset All",
            allLevels: "All Levels",
            beginner: "Beginner",
            intermediate: "Intermediate",
            advanced: "Advanced",
            allQuestions: "All Questions",
            searchPlaceholder: "Search questions & topics...",
            sortLabel: "Sort by:",
            sortDefault: "Default",
            sortDiffAsc: "Difficulty (Low to High)",
            sortDiffDesc: "Difficulty (High to Low)",
            activeFiltersLabel: "Active Filters:",
            prevBtn: "Previous",
            nextBtn: "Next",
            perPage: "Per page:",
            emptyTitle: "No questions found!",
            emptyDesc: "Your search or selected filters returned no matching results. Please try a different query.",
            emptyReset: "Show All Questions",
            viewDetails: "View Full Answer & Tips",
            keySummary: "Key Answer Summary:",
            fullAnswer: "Comprehensive Explanation:",
            diagramTitle: "Conceptual Diagram:",
            codeTitle: "Python Code / Prompt Snippet:",
            tipTitle: "Pro Interview Tip:",
            prevQuestion: "Previous Question",
            nextQuestion: "Next Question",
            quizHeader: "Practice Question",
            quizHint: "Spend 2 minutes thinking or writing down your answer key before revealing the full solution!",
            quizShowAnswer: "Show Full Answer",
            quizNextStep: "Next Practice Question",
            copyright: "Designed for your success in AI Engineering & MLOps interviews",
            footerTag: "Comprehensive AI Engineer Job Interview Platform",
            githubHeading: "GitHub",
            githubLabel: "View Profile on GitHub",
            filterBtn: "Menu",
            filterMenuTitle: "Menu & Filters",
            toolsHeading: "Tools & Options"
        }
    };

    const categoryTranslations = {
        all: { fa: "همه سوالات", en: "All Questions" },
        soft_skills: { fa: "مهارت‌های نرم", en: "Soft Skills" },
        rag_graphrag: { fa: "سیستم‌های RAG و GraphRAG", en: "RAG & GraphRAG Systems" },
        nlp_llm: { fa: "مدل‌های زبانی و NLP", en: "LLMs & Natural Language Processing" },
        agents: { fa: "عامل‌های هوش مصنوعی", en: "AI Agents & Multi-Agent" },
        ml_dl: { fa: "یادگیری ماشین و عمیق", en: "Machine & Deep Learning" },
        mlops_system: { fa: "سیستم دیزاین و MLOps", en: "System Design & MLOps" },
        data_python: { fa: "تحلیل داده و پایتون", en: "Data Analysis & Python" }
    };

    // DOM Elements
    const langToggleBtn = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    
    const categoryList = document.getElementById('category-list');
    const questionsGrid = document.getElementById('questions-grid');
    const emptyState = document.getElementById('empty-state');
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    const sortSelect = document.getElementById('sort-select');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const emptyResetBtn = document.getElementById('empty-reset-btn');
    
    // Pagination DOM
    const paginationBar = document.getElementById('pagination-bar');
    const paginationInfo = document.getElementById('pagination-info');
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    const pageNumbersContainer = document.getElementById('page-numbers-container');
    const pageSizeSelect = document.getElementById('page-size-select');
    const prevIcon = document.getElementById('prev-icon');
    const nextIcon = document.getElementById('next-icon');

    // Theme & Stats
    const themeToggleBtn = document.getElementById('theme-toggle');
    const statTotalQ = document.getElementById('stat-total-q');
    
    // Filters DOM
    const difficultyFilters = document.getElementById('difficulty-filters');
    const activeTagsContainer = document.getElementById('active-tags-container');
    const activeTagsList = document.getElementById('active-tags-list');

    // Modals DOM
    const questionModal = document.getElementById('question-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalCategory = document.getElementById('modal-category');
    const modalDifficulty = document.getElementById('modal-difficulty');
    const modalTitle = document.getElementById('modal-title');
    const modalBodyContent = document.getElementById('modal-body-content');
    const modalPrevBtn = document.getElementById('modal-prev-btn');
    const modalNextBtn = document.getElementById('modal-next-btn');
    const modalPrevIcon = document.getElementById('modal-prev-icon');
    const modalNextIcon = document.getElementById('modal-next-icon');

    // Quiz Elements
    const quizBtn = document.getElementById('quiz-btn');
    const quizModal = document.getElementById('quiz-modal');
    const quizCloseBtn = document.getElementById('quiz-close-btn');
    const quizProgressFill = document.getElementById('quiz-progress-fill');
    const quizCurrentStep = document.getElementById('quiz-current-step');
    const quizTotalStep = document.getElementById('quiz-total-step');
    const quizCategory = document.getElementById('quiz-category');
    const quizQuestionTitle = document.getElementById('quiz-question-title');
    const quizAnswerBox = document.getElementById('quiz-answer-box');
    const quizAnswerContent = document.getElementById('quiz-answer-content');
    const quizShowAnswerBtn = document.getElementById('quiz-show-answer-btn');
    const quizNavBox = document.getElementById('quiz-nav-box');
    const quizNextBtn = document.getElementById('quiz-next-btn');
    const quizNextIcon = document.getElementById('quiz-next-icon');

    // Mobile Sidebar Elements
    const mobileFilterBtn = document.getElementById('mobile-filter-btn');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebar = document.getElementById('sidebar');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    const drawerQuizBtn = document.getElementById('drawer-quiz-btn');
    const drawerLangToggle = document.getElementById('drawer-lang-toggle');
    const drawerLangText = document.getElementById('drawer-lang-text');

    // Initialize Language
    setLanguage(currentLang);

    // Initial Setup
    init();

    function init() {
        renderCategorySidebar();
        updateStats();
        renderQuestions();
        setupEventListeners();
    }

    function openMobileSidebar() {
        if (sidebar) sidebar.classList.add('open');
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove('hidden');
            void sidebarOverlay.offsetWidth;
            sidebarOverlay.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
    }

    function closeMobileSidebar() {
        if (sidebar) sidebar.classList.remove('open');
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove('active');
            setTimeout(() => {
                if (sidebarOverlay && !sidebarOverlay.classList.contains('active')) {
                    sidebarOverlay.classList.add('hidden');
                }
            }, 300);
        }
        document.body.style.overflow = '';
    }

    /* ==========================================================================
       Language & i18n Functions
       ========================================================================== */
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem(LS_LANG, lang);
        
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
        
        if (langText) langText.textContent = lang === 'fa' ? 'EN' : 'FA';
        if (drawerLangText) {
            drawerLangText.textContent = lang === 'fa' ? 'زبان: English' : 'Language: فارسی';
        }
        if (searchInput) {
            if (window.innerWidth <= 640) {
                searchInput.placeholder = lang === 'fa' ? "جستجو در سوالات..." : "Search questions...";
            } else {
                searchInput.placeholder = translations[lang].searchPlaceholder;
            }
            searchInput.dir = lang === 'fa' ? 'rtl' : 'ltr';
        }

        // Update all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Directional Icons Update
        if (lang === 'en') {
            if (prevIcon) prevIcon.className = 'fa-solid fa-angle-left';
            if (nextIcon) nextIcon.className = 'fa-solid fa-angle-right';
            if (modalPrevIcon) modalPrevIcon.className = 'fa-solid fa-arrow-left';
            if (modalNextIcon) modalNextIcon.className = 'fa-solid fa-arrow-right';
            if (quizNextIcon) quizNextIcon.className = 'fa-solid fa-arrow-right';
        } else {
            if (prevIcon) prevIcon.className = 'fa-solid fa-angle-right';
            if (nextIcon) nextIcon.className = 'fa-solid fa-angle-left';
            if (modalPrevIcon) modalPrevIcon.className = 'fa-solid fa-arrow-right';
            if (modalNextIcon) modalNextIcon.className = 'fa-solid fa-arrow-left';
            if (quizNextIcon) quizNextIcon.className = 'fa-solid fa-arrow-left';
        }

        renderCategorySidebar();
        updateStats();
        renderQuestions();
    }

    /* ==========================================================================
       Render Functions
       ========================================================================== */
    function renderCategorySidebar() {
        if (!categoryList) return;
        categoryList.innerHTML = '';
        
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `cat-item ${activeCategory === cat.id ? 'active' : ''}`;
            btn.dataset.category = cat.id;

            let count = 0;
            if (cat.id === 'all') {
                count = questions.length;
            } else {
                count = questions.filter(q => q.category === cat.id).length;
            }

            const title = categoryTranslations[cat.id] 
                ? categoryTranslations[cat.id][currentLang] 
                : cat.title;

            btn.innerHTML = `
                <div class="cat-item-main">
                    <i class="cat-icon ${cat.icon}"></i>
                    <span class="cat-title-text">${title}</span>
                </div>
                <span class="cat-count">${formatNumber(count)}</span>
            `;

            btn.addEventListener('click', () => {
                activeCategory = cat.id;
                currentPage = 1;
                document.querySelectorAll('.cat-item').forEach(el => el.classList.remove('active'));
                btn.classList.add('active');
                if (window.innerWidth <= 960) {
                    btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }
                updateActiveTags();
                renderQuestions();
            });

            categoryList.appendChild(btn);
        });
    }

    function getFilteredQuestions() {
        return questions.filter(q => {
            if (activeCategory !== 'all' && q.category !== activeCategory) {
                return false;
            }
            if (activeDifficulty !== 'all' && q.difficulty !== activeDifficulty) {
                return false;
            }

            if (searchQuery.trim() !== '') {
                const query = searchQuery.toLowerCase();
                const titleMatch = q.title && q.title.toLowerCase().includes(query);
                const titleEnMatch = q.title_en && q.title_en.toLowerCase().includes(query);
                const summaryMatch = q.summary && q.summary.toLowerCase().includes(query);
                const tagsMatch = q.tags && q.tags.some(tag => tag.toLowerCase().includes(query));
                const fullAnswerMatch = q.fullAnswer && q.fullAnswer.toLowerCase().includes(query);
                
                return titleMatch || titleEnMatch || summaryMatch || tagsMatch || fullAnswerMatch;
            }

            return true;
        }).sort((a, b) => {
            if (sortOption === 'id-asc') return a.id - b.id;
            if (sortOption === 'id-desc') return b.id - a.id;
            
            const diffMap = { beginner: 1, intermediate: 2, advanced: 3 };
            if (sortOption === 'difficulty-asc') return diffMap[a.difficulty] - diffMap[b.difficulty];
            if (sortOption === 'difficulty-desc') return diffMap[b.difficulty] - diffMap[a.difficulty];
            
            return 0;
        });
    }

    function renderQuestions() {
        if (!questionsGrid) return;
        const filtered = getFilteredQuestions();
        const totalFiltered = filtered.length;
        
        if (totalFiltered === 0) {
            questionsGrid.innerHTML = '';
            if (emptyState) emptyState.classList.remove('hidden');
            if (paginationBar) paginationBar.classList.add('hidden');
            return;
        }

        if (emptyState) emptyState.classList.add('hidden');
        if (paginationBar) paginationBar.classList.remove('hidden');

        // Pagination Calculations
        const totalPages = Math.ceil(totalFiltered / pageSize);
        if (currentPage > totalPages) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, totalFiltered);
        const paginatedItems = filtered.slice(startIndex, endIndex);

        questionsGrid.innerHTML = '';

        paginatedItems.forEach(q => {
            const card = document.createElement('div');
            card.className = 'q-card';
            card.dataset.id = q.id;

            const categoryTitle = getCategoryTitle(q.category);
            const difficultyText = getDifficultyText(q.difficulty);

            const qTitle = (currentLang === 'en' && q.title_en) ? q.title_en : q.title;
            const qSummary = (currentLang === 'en' && q.summary_en) ? q.summary_en : q.summary;

            card.innerHTML = `
                <div class="q-card-top">
                    <div class="q-badges">
                        <span class="category-badge">${categoryTitle}</span>
                        <span class="badge badge-${q.difficulty}">${difficultyText}</span>
                    </div>
                </div>
                <h3 class="q-title">${highlightText(qTitle, searchQuery)}</h3>
                <p class="q-summary">${highlightText(qSummary, searchQuery)}</p>
                <div class="q-tags">
                    ${q.tags.map(tag => `<span class="q-tag">${tag}</span>`).join('')}
                </div>
            `;

            card.addEventListener('click', () => {
                openQuestionModal(q.id);
            });

            questionsGrid.appendChild(card);
        });

        // Render Pagination Controls
        renderPagination(startIndex + 1, endIndex, totalFiltered, totalPages);
    }

    function renderPagination(start, end, total, totalPages) {
        if (!paginationInfo || !pageNumbersContainer) return;

        if (currentLang === 'fa') {
            paginationInfo.innerHTML = `نمایش سوال <span>${formatNumber(start)}</span> تا <span>${formatNumber(end)}</span> از <span>${formatNumber(total)}</span>`;
        } else {
            paginationInfo.innerHTML = `Showing items <span>${start}</span> to <span>${end}</span> of <span>${total}</span>`;
        }

        if (prevPageBtn) prevPageBtn.disabled = currentPage === 1;
        if (nextPageBtn) nextPageBtn.disabled = currentPage === totalPages;

        pageNumbersContainer.innerHTML = '';

        const pages = getPageRange(currentPage, totalPages);

        pages.forEach(p => {
            if (p === '...') {
                const dots = document.createElement('span');
                dots.className = 'page-dots';
                dots.textContent = '...';
                pageNumbersContainer.appendChild(dots);
            } else {
                const pageBtn = document.createElement('button');
                pageBtn.className = `page-btn ${p === currentPage ? 'active' : ''}`;
                pageBtn.textContent = formatNumber(p);
                pageBtn.addEventListener('click', () => {
                    currentPage = p;
                    renderQuestions();
                    scrollToTop();
                });
                pageNumbersContainer.appendChild(pageBtn);
            }
        });
    }

    function getPageRange(current, total) {
        const isMobile = window.innerWidth <= 640;
        if (isMobile) {
            if (total <= 4) {
                return Array.from({ length: total }, (_, i) => i + 1);
            }
            if (current <= 2) {
                return [1, 2, 3, '...', total];
            }
            if (current >= total - 1) {
                return [1, '...', total - 2, total - 1, total];
            }
            return [1, '...', current, '...', total];
        }

        if (total <= 7) {
            return Array.from({ length: total }, (_, i) => i + 1);
        }

        if (current <= 4) {
            return [1, 2, 3, 4, 5, '...', total];
        }

        if (current >= total - 3) {
            return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
        }

        return [1, '...', current - 1, current, current + 1, '...', total];
    }

    function scrollToTop() {
        const topElement = document.querySelector('.controls-bar');
        if (topElement) {
            topElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function updateActiveTags() {
        if (!activeTagsList || !activeTagsContainer) return;
        activeTagsList.innerHTML = '';
        let hasActive = false;

        if (activeCategory !== 'all') {
            hasActive = true;
            addActiveTagPill(`${translations[currentLang].catHeading}: ${getCategoryTitle(activeCategory)}`, () => {
                activeCategory = 'all';
                currentPage = 1;
                renderCategorySidebar();
                updateActiveTags();
                renderQuestions();
            });
        }

        if (activeDifficulty !== 'all') {
            hasActive = true;
            addActiveTagPill(`${translations[currentLang].diffHeading}: ${getDifficultyText(activeDifficulty)}`, () => {
                activeDifficulty = 'all';
                currentPage = 1;
                if (difficultyFilters) {
                    difficultyFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                    const allChip = difficultyFilters.querySelector('[data-difficulty="all"]');
                    if (allChip) allChip.classList.add('active');
                }
                updateActiveTags();
                renderQuestions();
            });
        }

        if (searchQuery.trim() !== '') {
            hasActive = true;
            addActiveTagPill(`Search: "${searchQuery}"`, () => {
                searchQuery = '';
                currentPage = 1;
                if (searchInput) searchInput.value = '';
                if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
                updateActiveTags();
                renderQuestions();
            });
        }

        if (hasActive) {
            activeTagsContainer.classList.remove('hidden');
        } else {
            activeTagsContainer.classList.add('hidden');
        }
    }

    function addActiveTagPill(label, onRemove) {
        const pill = document.createElement('span');
        pill.className = 'tag-pill';
        pill.innerHTML = `${label} <i class="fa-solid fa-xmark"></i>`;
        pill.querySelector('i').addEventListener('click', onRemove);
        activeTagsList.appendChild(pill);
    }

    /* ==========================================================================
       Modal & Detail Viewer
       ========================================================================== */
    function openQuestionModal(id) {
        const q = questions.find(item => item.id === id);
        if (!q) return;

        currentModalQuestionId = id;

        const qTitle = (currentLang === 'en' && q.title_en) ? q.title_en : q.title;
        const qSummary = (currentLang === 'en' && q.summary_en) ? q.summary_en : q.summary;
        const qFullAnswer = (currentLang === 'en' && q.fullAnswer_en) ? q.fullAnswer_en : q.fullAnswer;
        const qTip = (currentLang === 'en' && q.tip_en) ? q.tip_en : q.tip;

        if (modalCategory) modalCategory.textContent = getCategoryTitle(q.category);
        if (modalDifficulty) {
            modalDifficulty.textContent = getDifficultyText(q.difficulty);
            modalDifficulty.className = `badge badge-${q.difficulty}`;
        }
        if (modalTitle) modalTitle.textContent = qTitle;

        let html = `
            <div class="modal-section">
                <h4><i class="fa-solid fa-align-right"></i> ${translations[currentLang].keySummary}</h4>
                <p>${qSummary}</p>
            </div>
            
            <div class="modal-section">
                <h4><i class="fa-solid fa-file-lines"></i> ${translations[currentLang].fullAnswer}</h4>
                <div class="full-answer-text">${formatMarkdownAnswer(qFullAnswer)}</div>
            </div>
        `;

        if (q.diagramSvg) {
            html += `
                <div class="modal-section">
                    <h4><i class="fa-solid fa-diagram-project"></i> ${translations[currentLang].diagramTitle}</h4>
                    <div class="diagram-box">${q.diagramSvg}</div>
                </div>
            `;
        }

        if (q.codeSnippet) {
            html += `
                <div class="modal-section">
                    <h4><i class="fa-solid fa-code"></i> ${translations[currentLang].codeTitle}</h4>
                    <div class="code-container">
                        <div class="code-header">
                            <span>Python / Script</span>
                            <button class="copy-code-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> ${currentLang === 'fa' ? 'کپی کد' : 'Copy Code'}</button>
                        </div>
                        <pre class="code-block"><code>${escapeHtml(q.codeSnippet)}</code></pre>
                    </div>
                </div>
            `;
        }

        if (qTip) {
            html += `
                <div class="tip-box">
                    <h4><i class="fa-solid fa-lightbulb"></i> ${translations[currentLang].tipTitle}</h4>
                    <p>${qTip}</p>
                </div>
            `;
        }

        if (modalBodyContent) modalBodyContent.innerHTML = html;

        if (questionModal) {
            questionModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (questionModal) questionModal.classList.add('hidden');
        document.body.style.overflow = '';
        currentModalQuestionId = null;
    }

    function navigateModal(direction) {
        const filtered = getFilteredQuestions();
        if (filtered.length === 0) return;

        const currentIndex = filtered.findIndex(q => q.id === currentModalQuestionId);
        if (currentIndex === -1) return;

        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = filtered.length - 1;
        if (newIndex >= filtered.length) newIndex = 0;

        openQuestionModal(filtered[newIndex].id);
    }

    /* ==========================================================================
       Quiz / Practice Mode
       ========================================================================== */
    function startQuizMode() {
        quizQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, 10);
        quizCurrentIndex = 0;

        renderQuizStep();
        if (quizModal) {
            quizModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    function renderQuizStep() {
        const q = quizQuestions[quizCurrentIndex];
        if (!q) return;

        if (quizCurrentStep) quizCurrentStep.textContent = formatNumber(quizCurrentIndex + 1);
        if (quizTotalStep) quizTotalStep.textContent = formatNumber(quizQuestions.length);
        if (quizProgressFill) quizProgressFill.style.width = `${((quizCurrentIndex + 1) / quizQuestions.length) * 100}%`;

        const qTitle = (currentLang === 'en' && q.title_en) ? q.title_en : q.title;
        const qFullAnswer = (currentLang === 'en' && q.fullAnswer_en) ? q.fullAnswer_en : q.fullAnswer;

        if (quizCategory) quizCategory.textContent = getCategoryTitle(q.category);
        if (quizQuestionTitle) quizQuestionTitle.textContent = qTitle;

        if (quizAnswerBox) quizAnswerBox.classList.add('hidden');
        if (quizAnswerContent) quizAnswerContent.innerHTML = formatMarkdownAnswer(qFullAnswer);
        if (quizShowAnswerBtn) quizShowAnswerBtn.classList.remove('hidden');
        if (quizNavBox) quizNavBox.classList.add('hidden');
    }

    function showQuizAnswer() {
        if (quizAnswerBox) quizAnswerBox.classList.remove('hidden');
        if (quizShowAnswerBtn) quizShowAnswerBtn.classList.add('hidden');
        if (quizNavBox) quizNavBox.classList.remove('hidden');
    }

    function nextQuizStep() {
        quizCurrentIndex++;
        if (quizCurrentIndex >= quizQuestions.length) {
            alert(currentLang === 'fa' ? 'تمرین به پایان رسید! خسته نباشید.' : 'Practice session finished! Great job.');
            closeQuizModal();
        } else {
            renderQuizStep();
        }
    }

    function closeQuizModal() {
        if (quizModal) quizModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    /* ==========================================================================
       State Helpers & Event Handlers
       ========================================================================== */
    function updateStats() {
        const total = questions.length;
        if (statTotalQ) statTotalQ.textContent = formatNumber(total);
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem(LS_THEME, newTheme);
        updateThemeIcon(newTheme);
    }

    function updateThemeIcon(theme) {
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = theme === 'dark' 
                ? '<i class="fa-solid fa-sun"></i>' 
                : '<i class="fa-solid fa-moon"></i>';
        }
    }

    function setupEventListeners() {
        // Mobile Sidebar Drawer Events
        if (mobileFilterBtn) mobileFilterBtn.addEventListener('click', openMobileSidebar);
        if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', closeMobileSidebar);
        if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeMobileSidebar);

        if (drawerQuizBtn) {
            drawerQuizBtn.addEventListener('click', () => {
                closeMobileSidebar();
                startQuizMode();
            });
        }

        if (drawerLangToggle) {
            drawerLangToggle.addEventListener('click', () => {
                const nextLang = currentLang === 'fa' ? 'en' : 'fa';
                setLanguage(nextLang);
            });
        }

        // Language Toggle Event
        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', () => {
                const nextLang = currentLang === 'fa' ? 'en' : 'fa';
                setLanguage(nextLang);
            });
        }

        // Search Input
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value;
                currentPage = 1;
                if (searchQuery.trim() !== '') {
                    if (clearSearchBtn) clearSearchBtn.classList.remove('hidden');
                } else {
                    if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
                }
                updateActiveTags();
                renderQuestions();
            });
        }

        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', () => {
                if (searchInput) searchInput.value = '';
                searchQuery = '';
                currentPage = 1;
                clearSearchBtn.classList.add('hidden');
                updateActiveTags();
                renderQuestions();
            });
        }

        // Sorting
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                sortOption = e.target.value;
                currentPage = 1;
                renderQuestions();
            });
        }

        // Pagination Buttons
        if (prevPageBtn) {
            prevPageBtn.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderQuestions();
                    scrollToTop();
                }
            });
        }

        if (nextPageBtn) {
            nextPageBtn.addEventListener('click', () => {
                const filtered = getFilteredQuestions();
                const totalPages = Math.ceil(filtered.length / pageSize);
                if (currentPage < totalPages) {
                    currentPage++;
                    renderQuestions();
                    scrollToTop();
                }
            });
        }

        if (pageSizeSelect) {
            pageSizeSelect.addEventListener('change', (e) => {
                pageSize = parseInt(e.target.value, 10);
                currentPage = 1;
                renderQuestions();
            });
        }

        // Difficulty Filters
        if (difficultyFilters) {
            difficultyFilters.querySelectorAll('.filter-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    difficultyFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                    chip.classList.add('active');
                    activeDifficulty = chip.dataset.difficulty;
                    currentPage = 1;
                    updateActiveTags();
                    renderQuestions();
                });
            });
        }

        // Reset All Filters
        const resetAll = () => {
            activeCategory = 'all';
            activeDifficulty = 'all';
            searchQuery = '';
            currentPage = 1;
            if (searchInput) searchInput.value = '';
            if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
            
            if (difficultyFilters) {
                difficultyFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                const allChip = difficultyFilters.querySelector('[data-difficulty="all"]');
                if (allChip) allChip.classList.add('active');
            }

            renderCategorySidebar();
            updateActiveTags();
            renderQuestions();
        };

        if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetAll);
        if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAll);

        // Theme Toggle
        if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

        // Modal Controls
        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
        if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => navigateModal(-1));
        if (modalNextBtn) modalNextBtn.addEventListener('click', () => navigateModal(1));

        // Close Modal on Overlay Click or ESC
        if (questionModal) {
            questionModal.addEventListener('click', (e) => {
                if (e.target === questionModal) closeModal();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (!e || !e.key) return;
            if (e.key === 'Escape') {
                closeModal();
                closeQuizModal();
            }
            if (questionModal && !questionModal.classList.contains('hidden')) {
                if (e.key === 'ArrowRight') navigateModal(currentLang === 'fa' ? -1 : 1);
                if (e.key === 'ArrowLeft') navigateModal(currentLang === 'fa' ? 1 : -1);
            }
        });

        // Quiz Mode Triggers
        if (quizBtn) quizBtn.addEventListener('click', startQuizMode);
        if (quizCloseBtn) quizCloseBtn.addEventListener('click', closeQuizModal);
        if (quizShowAnswerBtn) quizShowAnswerBtn.addEventListener('click', showQuizAnswer);
        if (quizNextBtn) quizNextBtn.addEventListener('click', nextQuizStep);
    }

    /* ==========================================================================
       Formatters & Utility Functions
       ========================================================================== */
    function getCategoryTitle(catId) {
        if (categoryTranslations[catId] && categoryTranslations[catId][currentLang]) {
            return categoryTranslations[catId][currentLang];
        }
        const found = categories.find(c => c.id === catId);
        return found ? found.title : catId;
    }

    function getDifficultyText(diff) {
        if (translations[currentLang] && translations[currentLang][diff]) {
            return translations[currentLang][diff];
        }
        const map = { beginner: 'مبتدی', intermediate: 'متوسط', advanced: 'پیشرفته' };
        return map[diff] || diff;
    }

    function formatNumber(num) {
        if (num === null || num === undefined) return '';
        if (currentLang === 'en') return num.toString();
        const pDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return num.toString().replace(/\d/g, x => pDigits[x]);
    }

    function highlightText(text, query) {
        if (!text) return '';
        if (!query || !query.trim()) return escapeHtml(text);
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
        return escapeHtml(text).replace(regex, '<mark class="highlight">$1</mark>');
    }

    function formatMarkdownAnswer(text) {
        if (!text) return '';
        let formatted = escapeHtml(text);
        
        // Bold
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Bullet points
        formatted = formatted.replace(/^- (.*$)/gim, '<li>$1</li>');
        formatted = formatted.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
        // Paragraph breaks
        formatted = formatted.replace(/\n\n/g, '<br><br>');

        return formatted;
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&#34;')
            .replace(/'/g, '&#039;');
    }

    // Global Window function for Copy Code
    window.copyCode = function(btn) {
        const codeBlock = btn.closest('.code-container').querySelector('code');
        const codeText = codeBlock.textContent;

        navigator.clipboard.writeText(codeText).then(() => {
            btn.innerHTML = `<i class="fa-solid fa-check"></i> ${currentLang === 'fa' ? 'کپی شد!' : 'Copied!'}`;
            setTimeout(() => {
                btn.innerHTML = `<i class="fa-regular fa-copy"></i> ${currentLang === 'fa' ? 'کپی کد' : 'Copy Code'}`;
            }, 2000);
        });
    };
});
