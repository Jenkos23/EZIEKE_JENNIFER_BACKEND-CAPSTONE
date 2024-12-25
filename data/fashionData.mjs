const fashionData = [
    {
        "headline": "Sustainable Fashion Takes Center Stage at Paris Fashion Week 2023",
        "date": "2023-10-02",
        "author": "Jessica Taylor",
        "content": {
            "introduction": "Paris Fashion Week 2023 has begun, showcasing innovative designs and a strong commitment to sustainability.",
            "highlights": [
                {
                    "designer": "Elsa Schiaparelli",
                    "collection": "Recycled Dreams",
                    "description": "Futuristic silhouettes created entirely from recycled materials, celebrating eco-conscious consumerism.",
                    "imageUrl": "https://imgs.search.brave.com/EPPqo7NFlbAz7PWuAcwCMUEBMnukM5BY-8Ly9Gg4w8k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZXdv/cmxkLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wOC9F/bHNhLVNjaGlhcGFy/ZWxsaS5qcGc"
                },
                {
                    "designer": "Maison Margiela",
                    "collection": "Upcycled Couture",
                    "description": "A collection that transforms waste into exquisite garments, featuring patchwork techniques and vibrant colors.",
                    "imageUrl": "https://imgs.search.brave.com/DY1K9x1i-8H27XiSHSlNdAlvVULao7Md-aJ7fzYNw9A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQxLzlh/LzAzLzQxOWEwMzc3/Y2JiMjkwMmNmNTIz/Nzc0NWM0YjJkOTU4/LmpwZw"
                },
                {
                    "designer": "Stella McCartney",
                    "collection": "Nature's Echo",
                    "description": "A tribute to Mother Nature, with floral prints and organic fabrics, emphasizing harmony between fashion and the environment.",
                    "imageUrl": "https://imgs.search.brave.com/UtkKztFcLYZ-Uc6G7t7RIdN9sQA_SSDoAVINtbyvbmw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by9sdm1oLWNvbS8z/ZjZkNjYwNS0yNTlj/LTQyZWEtYWU0ZS02/YjE2NzU1OWVmZDlf/c3RlbGxhLWlkZW50/aXR5LTk3MngxMzU4/LmpwZz9hdXRvPWNv/bXByZXNzLGZvcm1h/dCZmaXQ9bWF4Jnc9/Mzg0MA"
                }
            ],
            "industry_impact": "As major brands embrace sustainable practices, industry experts believe this could revolutionize the fashion landscape, inspiring more designers to adopt eco-friendly approaches.",
            "conclusion": "With a growing emphasis on sustainability, Paris Fashion Week 2023 is setting the tone for a new era in fashion, where style and conscience go hand in hand."
        },
        "tags": ["Sustainable Fashion", "Paris Fashion Week", "Eco-Friendly", "Designers", "Fashion Trends"]
    },
    {
        "headline": "New York Fashion Week: Bold Colors Dominate Spring/Summer 2024",
        "date": "2023-09-12",
        "author": "Michael Clarke",
        "content": {
            "introduction": "New York Fashion Week 2023 highlights vibrant palettes and daring patterns.",
            "highlights": [
                {
                    "designer": "Tom Ford",
                    "collection": "Electric Nights",
                    "description": "A fusion of neon colors that pays homage to the nightlife of the urban landscape.",
                    "imageUrl": "https://imgs.search.brave.com/VkCQEkaQDGMZ4HNICS6GsjzvCd_OxuxLTqMJCBNDm4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudm9ndWUuY29t/L3Bob3Rvcy82Mjgy/NGU3MGQ3MDMyZjk4/MGZlOGU2YjMvMTox/L3dfMzU0LGNfbGlt/aXQvdW5uYW1lZC5q/cGc"
                },
                {
                    "designer": "Tory Burch",
                    "collection": "Garden Party",
                    "description": "Bright floral designs that encapsulate the spirit of spring with bold, lively colors.",
                    "imageUrl": "https://imgs.search.brave.com/j5mOJaLLs3N8jvfXiH4MghnvHSWF8DgyEVdoEeVZ_5Q/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5m/YW1vdXMtZW50cmVw/cmVuZXVycy5jb20v/aW1hZ2VzL3Rvcnkt/YnVyY2guanBn"
                }
            ],
            "industry_impact": "Experts predict these daring colors will influence retail trends for upcoming seasons.",
            "conclusion": "New York's emphasis on boldness showcases a shift towards expressive fashion choices."
        },
        "tags": ["New York Fashion Week", "Bold Colors", "Spring/Summer 2024", "Fashion Trends"]
    },
    {
        "headline": "Milan Fashion Week Showcases Gender-Neutral Collections",
        "date": "2023-09-24",
        "author": "Ava Lee",
        "content": {
            "introduction": "Milan Fashion Week emphasizes inclusivity with a range of gender-neutral designs.",
            "highlights": [
                {
                    "designer": "Gucci",
                    "collection": "Fluidity",
                    "description": "Blurring the lines between menswear and womenswear with fluid silhouettes.",
                    "imageUrl": "https://imgs.search.brave.com/sMrt5u1Pn4OtL3h9yeSExbdkRoNHycrgw_psJY5bPNg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODI4/NTc5MTQyL3Bob3Rv/L3RoZS1mb3VuZGVy/LW9mLXRoZS1mYW1v/dXMtaW50ZXJuYXRp/b25hbC1sZWF0aGVy/d2Vhci1maXJtLWd1/Y2NpLW1hdXJpemlv/LWd1Y2NpLWluLWxv/bmRvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dVZ5WmZp/NjZZNDJRMFBHYlZp/bnFLU3NJMkh6Z0lm/a2xiSV9ZbFUyaGhj/VT0"
                },
                {
                    "designer": "Prada",
                    "collection": "Unbound",
                    "description": "A collection that challenges gender norms with versatile pieces for all.",
                    "imageUrl": "https://imgs.search.brave.com/xnX2R0Ukn7VUVOO_HWEjp6HjZ4fon7bolwF5Q_ct3pk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQx/MzQ1NjIxL3Bob3Rv/L2l0YWxpYW4tZmFz/aGlvbi1kZXNpZ25l/ci1taXVjY2lhLXBy/YWRhLWF0LWEtcGhv/dG9ncmFwaGljLWV4/aGliaXRpb24tMTk5/Mi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9THU5dlFqYlp4/N1k4NWlSS2FhbWFm/UFBuNFMzMURXMHVH/VkJpVVd6Sk9mTT0"
                }
            ],
            "industry_impact": "This trend is reshaping the way brands think about gender in fashion.",
            "conclusion": "Milan's focus on inclusivity is paving the way for a more diverse fashion landscape."
        },
        "tags": ["Milan Fashion Week", "Gender-Neutral", "Inclusivity", "Fashion Trends"]
    },
    {
        "headline": "High-Tech Fashion: Wearable Tech Makes Waves in 2023",
        "date": "2023-08-15",
        "author": "Oliver Smith",
        "content": {
            "introduction": "The convergence of technology and fashion continues to grow as designers incorporate wearable tech.",
            "highlights": [
                {
                    "designer": "Y-3",
                    "collection": "Smart Sport",
                    "description": "Athletic wear infused with sensors to track performance in real-time.",
                    "imageUrl": "https://imgs.search.brave.com/FpOAPPfk4C5-Ka9nKiKCucxtqOR3q8SCR89K8AGyHck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnRoZW5ld3Nt/YXJrZXQuY29tL1By/ZXZpZXdzL0FESUQv/U3RpbGxBc3NldHMv/U291cmNlX01heF8y/NTYwLzY2OTYwOV92/My5qcGc"
                },
                {
                    "designer": "Balenciaga",
                    "collection": "Digital Reality",
                    "description": "Clothes that change color based on mood or environment using advanced technology.",
                    "imageUrl": "https://imgs.search.brave.com/Bkd-Vgs3x6uQwIbI_zXApvmia8_fqgAKqLgvcW4J508/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTM0/MDIxNDkvcGhvdG8v/ZnJhbmNlLWNyaXN0/b2JhbC1iYWxlbmNp/YWdhLXNwYW5pc2gt/Y291dHVyaWVyLWZy/YW5jZS1vbi0xOTI3/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1MQU1Ed0ZMcENp/aDdhOFZyQjNjTWpq/by13c2NDdkoyczk2/cFMxUjFFT1pvPQ"
                }
            ],
            "industry_impact": "Wearable fashion is not just a trend; it's transforming consumer tech interactions.",
            "conclusion": "As tech becomes integral to fashion, the possibilities for innovation are limitless."
        },
        "tags": ["Wearable Tech", "Fashion Innovations", "High-Tech Fashion"]
    },
    {
        "headline": "Iconic Collections from the 90s Make a Comeback",
        "date": "2023-09-05",
        "author": "Liam Johnson",
        "content": {
            "introduction": "Fashion from the 90s is resurging, influencing new collections and consumer preferences.",
            "highlights": [
                {
                    "designer": "Marc Jacobs",
                    "collection": "Back to the Future",
                    "description": "A nostalgic revival featuring grunge elements and oversized fits.",
                    "imageUrl": "https://imgs.search.brave.com/IX6gMA8YMGA6Py91T3aqdzb89RuvmqkdMRq4uNRfn2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudm9ndWUuY29t/L3Bob3Rvcy82NzM3/NTVmYmY0MTEwZGQ2/MzRiYTVmYWUvNDoz/L3dfMTYwMCxjX2xp/bWl0L0NOMDAxMDg2/NDQuanBn"
                },
                {
                    "designer": "Calvin Klein",
                    "collection": "Essential Classics",
                    "description": "Timeless pieces updated for modern sensibilities with a minimalist approach.",
                    "imageUrl": "https://imgs.search.brave.com/cfdhMeur_-JuBd1VI75hDf3fdIYF28rSn40GVC_awpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9jYWx2/aW4ta2xlaW4tR2V0/dHlJbWFnZXMtNTA5/ODM4OTEwXzE2MDAu/anBnP2Nyb3A9MXh3/OjEuMHhoO2NlbnRl/cix0b3AmcmVzaXpl/PTY0MDoq"
                }
            ],
            "industry_impact": "The resurgence of 90s fashion reveals a cyclical nature in style preferences.",
            "conclusion": "As nostalgia takes hold, brands look back to the past for inspiration in their designs."
        },
        "tags": ["90s Fashion", "Retro Style", "Fashion Comeback"]
    },
    {
        "headline": "Vegan Leather Takes Over Traditional Materials",
        "date": "2023-10-01",
        "author": "Emma White",
        "content": {
            "introduction": "Vegan leather is becoming a favored alternative to traditional leather in the fashion industry.",
            "highlights": [
                {
                    "designer": "Nanushka",
                    "collection": "Eco Chic",
                    "description": "Stylish vegan leather coats that combine elegance with sustainability.",
                    "imageUrl": "https://imgs.search.brave.com/Z7vp0AiIRqQ8jJeWaLwqd3IFrayH3ZrQhHulQipkO3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/YnVzaW5lc3NvZmZh/c2hpb24uY29tL3Jl/c2l6ZXIvdjIvSlM0/VUdMNVdBQkhRQkZI/QUlWQlZXSDNYRVUu/anBnP2ZvY2FsPTUw/LDUwJmF1dGg9MTRk/ZDE1ZjEwMjdjNzZm/YzZlZDRjYWZhYTgw/NWE1MTExMDEzOTBk/ZWVhNzVmZGNjZGRj/ZThiOGZmZGZlMTAy/NSZ3aWR0aD01MDAm/aGVpZ2h0PTI4MQ"
                },
                {
                    "designer": "Matt & Nat",
                    "collection": "Vegan Essentials",
                    "description": "Accessories crafted from innovative vegan materials.",
                    "imageUrl": "https://images.dailyhive.com/20210922055800/EAL_3028-1680x0-c-default.jpeg"
                }
            ],
            "industry_impact": "The shift towards vegan materials reflects growing consumer consciousness about animal rights.",
            "conclusion": "As alternatives to traditional leather improve, more brands are expected to follow suit."
        },
        "tags": ["Vegan Leather", "Sustainable Fashion", "Fashion Innovations"]
    },
    {
        "headline": "Luxury Brands Collaborate with Streetwear Icons",
        "date": "2023-09-15",
        "author": "Sophia Martinez",
        "content": {
            "introduction": "High-end fashion designers are partnering with streetwear labels to create exciting new collections.",
            "highlights": [
                {
                    "designer": "Louis Vuitton",
                    "collection": "Street Luxe",
                    "description": "A blend of luxury design with streetwear aesthetics.",
                    "imageUrl": "https://imgs.search.brave.com/KQTEZI2sCdtrcNvAsLx-YnfZKjkkujBsECXHoCv_QLQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9sb3Vp/cy12dWl0dG9uLTE3/MTEyMjY0LTEtNDAy/LmpwZz9jcm9wPTF4/dzoxLjB4aDtjZW50/ZXIsdG9wJnJlc2l6/ZT02NDA6Kg"
                },
                {
                    "designer": "Nike x Off-White",
                    "collection": "The Ten",
                    "description": "A reimagining of classic sneakers with a streetwear twist.",
                    "imageUrl": "https://imgs.search.brave.com/MT8gnlP2VvwsUvXY8k80aLjgyS_lnzovqMEPNLgmapU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZG11YmZyZWZp/L2ltYWdlL3ByaXZh/dGUvcy0tZGpWajM1/RVUtLS9jX2Nyb3As/aF8xNjAwLHdfMTA3/OSx4XzAseV8wL2Nf/c2NhbGUsd18zODQw/L2ZfYXV0by9xX2F1/dG8vdjEvZGVlLWFi/b3V0LWNtcy1wcm9k/LW1lZGlhcy9lOGUz/MjE4Zi0xMmJmLTQ4/NjEtYmQyMC1lNDM1/Y2QyYzgxNGUvdmly/Z2lsLWFibG9oLW5p/a2UtdGhlMTAtMTIt/NzMyMDEuanBnP19h/PUJBQUFWNkJz"
                }
            ],
            "industry_impact": "These collaborations highlight the growing influence of streetwear on luxury fashion.",
            "conclusion": "The fusion of luxury and street style is creating new fan bases and reshaping fashion norms."
        },
        "tags": ["Luxury Fashion", "Streetwear", "Collaborations"]
    }
];



// Separate data for designers and images
const designersData = [
    {
        "id": 1,
        "designer": "Elsa Schiaparelli",
        "imageUrl": "https://imgs.search.brave.com/EPPqo7NFlbAz7PWuAcwCMUEBMnukM5BY-8Ly9Gg4w8k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZXdv/cmxkLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wOC9F/bHNhLVNjaGlhcGFy/ZWxsaS5qcGc"
    },
    {
        "id": 2,
        "designer": "Maison Margiela",
        "imageUrl": "https://imgs.search.brave.com/DY1K9x1i-8H27XiSHSlNdAlvVULao7Md-aJ7fzYNw9A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQxLzlh/LzAzLzQxOWEwMzc3/Y2JiMjkwMmNmNTIz/Nzc0NWM0YjJkOTU4/LmpwZw"
    },
    {
        "id": 3,
        "designer": "Stella McCartney",
        "imageUrl": "https://imgs.search.brave.com/UtkKztFcLYZ-Uc6G7t7RIdN9sQA_SSDoAVINtbyvbmw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by9sdm1oLWNvbS8z/ZjZkNjYwNS0yNTlj/LTQyZWEtYWU0ZS02/YjE2NzU1OWVmZDlf/c3RlbGxhLWlkZW50/aXR5LTk3MngxMzU4/LmpwZz9hdXRvPWNv/bXByZXNzLGZvcm1h/dCZmaXQ9bWF4Jnc9/Mzg0MA"
    },
    {
        "id": 4,
        "designer": "Tom Ford",
        "imageUrl": "https://imgs.search.brave.com/VkCQEkaQDGMZ4HNICS6GsjzvCd_OxuxLTqMJCBNDm4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudm9ndWUuY29t/L3Bob3Rvcy82Mjgy/NGU3MGQ3MDMyZjk4/MGZlOGU2YjMvMTox/L3dfMzU0LGNfbGlt/aXQvdW5uYW1lZC5q/cGc"
    },
    {
        "id": 5,
        "designer": "Tory Burch",
        "imageUrl": "https://imgs.search.brave.com/j5mOJaLLs3N8jvfXiH4MghnvHSWF8DgyEVdoEeVZ_5Q/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5m/YW1vdXMtZW50cmVw/cmVuZXVycy5jb20v/aW1hZ2VzL3Rvcnkt/YnVyY2guanBn"
    },
    {
        "id": 6,
        "designer": "Gucci",
        "image_url": "https://imgs.search.brave.com/sMrt5u1Pn4OtL3h9yeSExbdkRoNHycrgw_psJY5bPNg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODI4/NTc5MTQyL3Bob3Rv/L3RoZS1mb3VuZGVy/LW9mLXRoZS1mYW1v/dXMtaW50ZXJuYXRp/b25hbC1sZWF0aGVy/d2Vhci1maXJtLWd1/Y2NpLW1hdXJpemlv/LWd1Y2NpLWluLWxv/bmRvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dVZ5WmZp/NjZZNDJRMFBHYlZp/bnFLU3NJMkh6Z0lm/a2xiSV9ZbFUyaGhj/VT0"
      },
      {
        "id": 7,
        "designer": "Prada",
        "image_url": "https://imgs.search.brave.com/xnX2R0Ukn7VUVOO_HWEjp6HjZ4fon7bolwF5Q_ct3pk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQx/MzQ1NjIxL3Bob3Rv/L2l0YWxpYW4tZmFz/aGlvbi1kZXNpZ25l/ci1taXVjY2lhLXBy/YWRhLWF0LWEtcGhv/dG9ncmFwaGljLWV4/aGliaXRpb24tMTk5/Mi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9THU5dlFqYlp4/N1k4NWlSS2FhbWFm/UFBuNFMzMURXMHVH/VkJpVVd6Sk9mTT0"
      },
      {
        "id": 8,
        "designer": "Y-3",
        "image_url": "https://imgs.search.brave.com/FpOAPPfk4C5-Ka9nKiKCucxtqOR3q8SCR89K8AGyHck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnRoZW5ld3Nt/YXJrZXQuY29tL1By/ZXZpZXdzL0FESUQv/U3RpbGxBc3NldHMv/U291cmNlX01heF8y/NTYwLzY2OTYwOV92/My5qcGc"
      },
      {
        "id": 9,
        "designer": "Balenciaga",
        "image_url": "https://imgs.search.brave.com/Bkd-Vgs3x6uQwIbI_zXApvmia8_fqgAKqLgvcW4J508/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTM0/MDIxNDkvcGhvdG8v/ZnJhbmNlLWNyaXN0/b2JhbC1iYWxlbmNp/YWdhLXNwYW5pc2gt/Y291dHVyaWVyLWZy/YW5jZS1vbi0xOTI3/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1MQU1Ed0ZMcENp/aDdhOFZyQjNjTWpq/by13c2NDdkoyczk2/cFMxUjFFT1pvPQ"
      },
      {
        "id": 10,
        "designer": "Marc Jacobs",
        "image_url": "https://imgs.search.brave.com/IX6gMA8YMGA6Py91T3aqdzb89RuvmqkdMRq4uNRfn2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudm9ndWUuY29t/L3Bob3Rvcy82NzM3/NTVmYmY0MTEwZGQ2/MzRiYTVmYWUvNDoz/L3dfMTYwMCxjX2xp/bWl0L0NOMDAxMDg2/NDQuanBn"
      },
      {
        "id": 11,
        "designer": "Calvin Klein",
        "image_url": "https://imgs.search.brave.com/cfdhMeur_-JuBd1VI75hDf3fdIYF28rSn40GVC_awpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9jYWx2/aW4ta2xlaW4tR2V0/dHlJbWFnZXMtNTA5/ODM4OTEwXzE2MDAu/anBnP2Nyb3A9MXh3/OjEuMHhoO2NlbnRl/cix0b3AmcmVzaXBl/PTY0MDoq"
      },
      {
        "id": 12,
        "designer": "Nanushka",
        "image_url": "https://imgs.search.brave.com/Z7vp0AiIRqQ8jJeWaLwqd3IFrayH3ZrQhHulQipkO3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/YnVzaW5lc3NvZmZh/c2hpb24uY29tL3Jl/c2l6ZXIvdjIvSlM0/VUdMNVdBQkhRQkZI/QUlWQlZXSDNYRVUu/anBnP2ZvY2FsPTUw/LDUwJmF1dGg9MTRk/ZDE1ZjEwMjdjNzZm/YzZlZDRjYWZhYTgw/NWE1MTExMDEzOTBk/ZWVhNzVmZGNjZGRj/ZThiOGZmZGZlMTAy/NSZ3aWR0aD01MDAm/aGVpZ2h0PTI1MCZjaGVp/Z2h0PTMwJnNoYXJl/PS5pc0luc3RpdHV0/ZXNfc2Nob3RjYW5lLXNoYWw="
      }
];

export { fashionData, designersData };