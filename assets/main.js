
        document.addEventListener('DOMContentLoaded', function () {
            const presentationsContainer = document.getElementById('presentationsContainer');

            function loadPptx(url, id) {
                const container = document.getElementById(`pptx-preview-${id}`);
                container.innerHTML = `
        <iframe src="${url}" frameborder="0" allowfullscreen style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"></iframe>
    `;
            }


            const data = {
                "presentations": [
                    {
                        "id": 1,
                        "student": {
                            "name": "Ibram Hany"
                        },
                        "videoId": "b75d2f8a-1e73-46e7-b159-24ec55d42654",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/%D8%A7%D8%A8%D8%B1%D8%A7%D9%85%20%D9%87%D8%A7%D9%86%D9%8A.pptx",
                        "duration": "12:45"
                    },
                    {
                        "id": 2,
                        "student": {
                            "name": "Ahmed Amr"
                        },
                        "videoId": "d8d329d4-da67-4d50-8d1a-be36313f7e8d",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/%D8%A7%D8%AD%D9%85%D8%AF%20%D8%B9%D9%85%D8%B1%D9%88.pptx",
                        "duration": "15:30"
                    },
                    {
                        "id": 3,
                        "student": {
                            "name": "Ahmed Hamed"
                        },
                        "videoId": "048f99b8-0790-4c1c-8342-b3588fc06527",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/%D8%A7%D8%AD%D9%85%D8%AF%20%D8%AD%D8%A7%D9%85%D8%AF.pptx",
                        "duration": "15:30"
                    },
                    {
                        "id": 4,
                        "student": {
                            "name": "Adham Ayman"
                        },
                        "videoId": "5ff0a18a-ed51-4871-9b26-9144c1d99238",
                        "slidesUrl": "",
                        "duration": "15:30"
                    },
                    {
                        "id": 5,
                        "student": {
                            "name": "Akmal Hossam"
                        },
                        "videoId": "",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/%D8%A7%D9%83%D9%85%D9%84.pptx",
                        "duration": "15:30"
                    },
                    {
                        "id": 6,
                        "student": {
                            "name": "Moatsem"
                        },
                        "videoId": "",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D8%B5%D9%85.pptx",
                        "duration": "15:30"
                    },
                    {
                        "id": 7,
                        "student": {
                            "name": "Hazem Emad"
                        },
                        "videoId": "971db68a-2804-45cb-be51-8eb712fa358e",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/%D8%AD%D8%A7%D8%B2%D9%85%20%D8%B9%D9%85%D8%A7%D8%AF.pptx",
                        "duration": "15:30"
                    },
                    {
                        "id": 8,
                        "student": {
                            "name": "Abd-Elrahaman"
                        },
                        "videoId": "0e7ecee3-2b4c-4b39-92b7-67e126a48eca",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86.pptx",
                        "duration": "15:30"
                    },
                    {
                        "id": 9,
                        "student": {
                            "name": "Abd-Allah"
                        },
                        "videoId": "7f38e6bd-0543-4a0b-913b-0837bd56649c",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87.pptx",
                        "duration": "15:30"
                    },
                    {
                        "id": 10,
                        "student": {
                            "name": "Omar Saber"
                        },
                        "videoId": "25ac5f57-24a7-436c-9777-8b193f6d087e",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/Omar%20Elwany.pptx",
                        "duration": "15:30"
                    },
                    {
                        "id": 11,
                        "student": {
                            "name": "Omar Mohamed"
                        },
                        "videoId": "940a48c6-e899-4493-842a-deadc2c44c3f",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/omar-mohamed.pdf",
                        "duration": "15:30"
                    },
                    {
                        "id": 12,
                        "student": {
                            "name": "Amr"
                        },
                        "videoId": "7e2233d6-88e7-4dcb-92e1-d7995faf2ff3",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/amr.pptx",
                        "duration": "15:30"
                    },

                    {
                        "id": 13,
                        "student": {
                            "name": "Kevin Martin"
                        },
                        "videoId": "23a6d026-30d8-44d5-9fe8-1fc1c2e2dca7",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/%D9%83%D9%8A%D9%81%D9%86.pptx",
                        "duration": "15:30"
                    },
                    {
                        "id": 14,
                        "student": {
                            "name": "Mohamed Ibrahim Tayel"
                        },
                        "videoId": "8e1605af-6941-4d06-ac02-7df871146041",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/%D8%B7%D8%A7%D9%8A%D9%84.pptx",
                        "duration": "15:30"
                    },
                    {
                        "id": 15,
                        "student": {
                            "name": "Mohaemed Hassan"
                        },
                        "videoId": "47385b99-6449-40a3-8c67-1e780343e3b0",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/Mohamed%20Hassan%20Presentation.pdf",
                        "duration": "15:30"
                    },
                    {
                        "id": 16,
                        "student": {
                            "name": "Mostafa El-Arabi"
                        },
                        "videoId": "36ab2494-7cd9-430c-84b2-7c5d70953d98",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/mostafa.pptx",
                        "duration": "15:30"
                    },
                    {
                        "id": 17,
                        "student": {
                            "name": "Moatz Ahmed"
                        },
                        "videoId": "182cd385-1a46-4128-8f79-2d10310b7b5a",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/%D9%85%D8%B9%D8%AA%D8%B2.pdf",
                        "duration": "15:30"
                    },
                    {
                        "id": 18,
                        "student": {
                            "name": "Youssef Ahmed"
                        },
                        "videoId": "2f9ec249-983b-49c9-a22a-14dabaa1c99c",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A3%D8%AD%D9%85%D8%AF.pptx",
                        "duration": "15:30"
                    },
                    {
                        "id": 19,
                        "student": {
                            "name": "Youssef Alaa"
                        },
                        "videoId": "5d60686c-a208-425d-b86a-2b018cfc8bb0",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/%D9%8A%D9%88%D8%B3%D9%81%20%D8%B9%D9%84%D8%A7%D8%A1.pptx",
                        "duration": "15:30"
                    },
                    {
                        "id": 20,
                        "student": {
                            "name": "Youssef Mohamed"
                        },
                        "videoId": "",
                        "slidesUrl": "",
                        "duration": "15:30"
                    },
                    {
                        "id": 21,
                        "student": {
                            "name": "Youssef Hany"
                        },
                        "videoId": "d8145126-ceed-4b11-82b4-f9fe9f44ae2f",
                        "slidesUrl": "https://cdn.expertfle.org/mrs-doaa-presentation-files/Youssef%20Hany.pptx",
                        "duration": "15:30"
                    },

                ]
            };

            function createVideoIframe(videoId) {
                if (!videoId) {
                    return '<div class="no-preview"><i class="fas fa-video-slash"></i> No video available</div>';
                }
                return `
                <div class="video-preview">
                    <iframe 
                        src="https://iframe.mediadelivery.net/embed/385613/${videoId}?autoplay=false&loop=false&muted=false&preload=true&responsive=true" 
                        loading="lazy" 
                        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
                        allowfullscreen>
                    </iframe>
                </div>
            `;
            }

            function createPptxPreview(slidesUrl, hasVideo, id) {
                if (!slidesUrl) {
                    return '<div class="no-preview"><i class="far fa-file-powerpoint"></i> No slides available</div>';
                }

                if (!hasVideo) {
                    return `
            <div class="pptx-preview" id="pptx-preview-${id}">
                <button class="btn btn-outline" onclick="loadPptx('${slidesUrl}', '${id}')">
                    <i class="fas fa-file-powerpoint"></i> Show Slides
                </button>
            </div>
        `;
                }

                return `
        <div class="pptx-preview">
            <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(slidesUrl)}" frameborder="0" allowfullscreen></iframe>
        </div>
    `;
            }

            function loadPptx(url, id) {
                const container = document.getElementById(`pptx-preview-${id}`);
                container.innerHTML = `
        <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}" frameborder="0" allowfullscreen style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"></iframe>
    `;
            }
            function togglePreview(button, id, type) {
                const buttons = button.parentElement.querySelectorAll('button');
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.fontWeight = '600';
                });
                button.classList.add('active');
                button.style.fontWeight = '700';

                document.getElementById(`video-${id}`).classList.toggle('hidden', type !== 'video');
                document.getElementById(`slides-${id}`).classList.toggle('hidden', type !== 'slides');
            }

            function renderPresentations(presentations) {
                presentationsContainer.innerHTML = presentations.map(presentation => {
                    const hasVideo = !!presentation.videoId;
                    const hasSlides = !!presentation.slidesUrl;

                    // Only show toggle buttons if both video and slides exist
                    const showToggleButtons = hasVideo && hasSlides;

                    // Default to showing slides if no video exists
                    const defaultShowVideo = hasVideo;
                    const defaultShowSlides = !hasVideo && hasSlides;

                    return `
                    <div class="presentation-card">
                        ${showToggleButtons ? `
                        <div class="preview-toggle">
                            <button class="${defaultShowVideo ? 'active' : ''}" onclick="togglePreview(this, ${presentation.id}, 'video')" style="font-weight: ${defaultShowVideo ? '700' : '600'};">
                                <i class="fas fa-video"></i> Video
                            </button>
                            <button class="${defaultShowSlides ? 'active' : ''}" onclick="togglePreview(this, ${presentation.id}, 'slides')" style="font-weight: ${defaultShowSlides ? '700' : '600'};">
                                <i class="fas fa-file-powerpoint"></i> Slides
                            </button>
                        </div>
                        ` : ''}
                        
                        <div id="video-${presentation.id}" class="${defaultShowVideo ? '' : 'hidden'}">
                            ${createVideoIframe(presentation.videoId)}
                        </div>
                        
                        <div id="slides-${presentation.id}" class="${defaultShowSlides ? '' : 'hidden'}">
                            ${createPptxPreview(presentation.slidesUrl, hasVideo, presentation.id)}
                        </div>
                        
                        <div class="card-content">
                            <div class="student-info">
                                <div class="student-name">${presentation.student.name}</div>
                            </div>
    
                            
                            <div class="presentation-actions">
                                ${hasVideo ? `
                                <a href="https://iframe.mediadelivery.net/play/385613/${presentation.videoId}" 
                                   target="_blank" 
                                   class="btn btn-primary">
                                    <i class="fas fa-play"></i> Watch Fullscreen
                                </a>
                                ` : ''}
                                
                                ${hasSlides ? `
                                <a href="${presentation.slidesUrl}" 
                                   target="_blank" 
                                   class="btn ${hasVideo ? 'btn-outline' : 'btn-primary'}">
                                    <i class="fas fa-download"></i> Download Slides
                                </a>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;
                }).join('');
            }

            renderPresentations(data.presentations);

            window.togglePreview = togglePreview;
        });