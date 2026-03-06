export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  price: number;
  category: 'Cho bé' | 'Cho người lớn' | 'Công cụ tiện ích';
  image: string;
  demoUrl: string;
  videoUrl?: string;
  rating: number;
  sales: number;
  reviews: Review[];
}

export const PRODUCTS: Product[] = [
  {
    "id": "product-1",
    "name": "Mẫu Landing Page & Portfolio Số 1",
    "description": "Giao diện hiện đại, tối ưu SEO và chuyển đổi cho dự án thứ 1.",
    "longDescription": "Sản phẩm Mẫu Landing Page & Portfolio Số 1 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 110000,
    "category": "Cho người lớn",
    "image": "https://picsum.photos/seed/landing-page-1/800/600",
    "demoUrl": "https://example.com/demo/product-1",
    "rating": 4.1,
    "sales": 115,
    "reviews": [
      {
        "id": "r1",
        "user": "Khách hàng 1",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-2",
    "name": "Công Cụ Tiện Ích Đa Năng V2",
    "description": "Giải pháp phần mềm chạy trên trình duyệt giúp tăng hiệu suất làm việc phiên bản 2.",
    "longDescription": "Sản phẩm Công Cụ Tiện Ích Đa Năng V2 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 120000,
    "category": "Công cụ tiện ích",
    "image": "https://picsum.photos/seed/utility-tool-2/800/600",
    "demoUrl": "https://example.com/demo/product-2",
    "rating": 4.2,
    "sales": 130,
    "reviews": [
      {
        "id": "r2",
        "user": "Khách hàng 2",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-3",
    "name": "Trò Chơi Giáo Dục Cho Bé Tập 3",
    "description": "Giúp bé phát triển tư duy qua các trò chơi tương tác thú vị phần 3.",
    "longDescription": "Sản phẩm Trò Chơi Giáo Dục Cho Bé Tập 3 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 130000,
    "category": "Cho bé",
    "image": "https://picsum.photos/seed/kids-game-3/800/600",
    "demoUrl": "https://example.com/demo/product-3",
    "rating": 4.3,
    "sales": 145,
    "reviews": [
      {
        "id": "r3",
        "user": "Khách hàng 3",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-4",
    "name": "Mẫu Landing Page & Portfolio Số 4",
    "description": "Giao diện hiện đại, tối ưu SEO và chuyển đổi cho dự án thứ 4.",
    "longDescription": "Sản phẩm Mẫu Landing Page & Portfolio Số 4 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 140000,
    "category": "Cho người lớn",
    "image": "https://picsum.photos/seed/landing-page-4/800/600",
    "demoUrl": "https://example.com/demo/product-4",
    "rating": 4.4,
    "sales": 160,
    "reviews": [
      {
        "id": "r4",
        "user": "Khách hàng 4",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-5",
    "name": "Công Cụ Tiện Ích Đa Năng V5",
    "description": "Giải pháp phần mềm chạy trên trình duyệt giúp tăng hiệu suất làm việc phiên bản 5.",
    "longDescription": "Sản phẩm Công Cụ Tiện Ích Đa Năng V5 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 150000,
    "category": "Công cụ tiện ích",
    "image": "https://picsum.photos/seed/utility-tool-5/800/600",
    "demoUrl": "https://example.com/demo/product-5",
    "rating": 4.5,
    "sales": 175,
    "reviews": [
      {
        "id": "r5",
        "user": "Khách hàng 5",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-6",
    "name": "Trò Chơi Giáo Dục Cho Bé Tập 6",
    "description": "Giúp bé phát triển tư duy qua các trò chơi tương tác thú vị phần 6.",
    "longDescription": "Sản phẩm Trò Chơi Giáo Dục Cho Bé Tập 6 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 160000,
    "category": "Cho bé",
    "image": "https://picsum.photos/seed/kids-game-6/800/600",
    "demoUrl": "https://example.com/demo/product-6",
    "rating": 4.6,
    "sales": 190,
    "reviews": [
      {
        "id": "r6",
        "user": "Khách hàng 6",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-7",
    "name": "Mẫu Landing Page & Portfolio Số 7",
    "description": "Giao diện hiện đại, tối ưu SEO và chuyển đổi cho dự án thứ 7.",
    "longDescription": "Sản phẩm Mẫu Landing Page & Portfolio Số 7 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 170000,
    "category": "Cho người lớn",
    "image": "https://picsum.photos/seed/landing-page-7/800/600",
    "demoUrl": "https://example.com/demo/product-7",
    "rating": 4.7,
    "sales": 205,
    "reviews": [
      {
        "id": "r7",
        "user": "Khách hàng 7",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-8",
    "name": "Công Cụ Tiện Ích Đa Năng V8",
    "description": "Giải pháp phần mềm chạy trên trình duyệt giúp tăng hiệu suất làm việc phiên bản 8.",
    "longDescription": "Sản phẩm Công Cụ Tiện Ích Đa Năng V8 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 180000,
    "category": "Công cụ tiện ích",
    "image": "https://picsum.photos/seed/utility-tool-8/800/600",
    "demoUrl": "https://example.com/demo/product-8",
    "rating": 4.8,
    "sales": 220,
    "reviews": [
      {
        "id": "r8",
        "user": "Khách hàng 8",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-9",
    "name": "Trò Chơi Giáo Dục Cho Bé Tập 9",
    "description": "Giúp bé phát triển tư duy qua các trò chơi tương tác thú vị phần 9.",
    "longDescription": "Sản phẩm Trò Chơi Giáo Dục Cho Bé Tập 9 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 190000,
    "category": "Cho bé",
    "image": "https://picsum.photos/seed/kids-game-9/800/600",
    "demoUrl": "https://example.com/demo/product-9",
    "rating": 4.9,
    "sales": 235,
    "reviews": [
      {
        "id": "r9",
        "user": "Khách hàng 9",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-10",
    "name": "Mẫu Landing Page & Portfolio Số 10",
    "description": "Giao diện hiện đại, tối ưu SEO và chuyển đổi cho dự án thứ 10.",
    "longDescription": "Sản phẩm Mẫu Landing Page & Portfolio Số 10 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 200000,
    "category": "Cho người lớn",
    "image": "https://picsum.photos/seed/landing-page-10/800/600",
    "demoUrl": "https://example.com/demo/product-10",
    "rating": 4,
    "sales": 250,
    "reviews": [
      {
        "id": "r10",
        "user": "Khách hàng 10",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-11",
    "name": "Công Cụ Tiện Ích Đa Năng V11",
    "description": "Giải pháp phần mềm chạy trên trình duyệt giúp tăng hiệu suất làm việc phiên bản 11.",
    "longDescription": "Sản phẩm Công Cụ Tiện Ích Đa Năng V11 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 210000,
    "category": "Công cụ tiện ích",
    "image": "https://picsum.photos/seed/utility-tool-11/800/600",
    "demoUrl": "https://example.com/demo/product-11",
    "rating": 4.1,
    "sales": 265,
    "reviews": [
      {
        "id": "r11",
        "user": "Khách hàng 11",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-12",
    "name": "Trò Chơi Giáo Dục Cho Bé Tập 12",
    "description": "Giúp bé phát triển tư duy qua các trò chơi tương tác thú vị phần 12.",
    "longDescription": "Sản phẩm Trò Chơi Giáo Dục Cho Bé Tập 12 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 220000,
    "category": "Cho bé",
    "image": "https://picsum.photos/seed/kids-game-12/800/600",
    "demoUrl": "https://example.com/demo/product-12",
    "rating": 4.2,
    "sales": 280,
    "reviews": [
      {
        "id": "r12",
        "user": "Khách hàng 12",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-13",
    "name": "Mẫu Landing Page & Portfolio Số 13",
    "description": "Giao diện hiện đại, tối ưu SEO và chuyển đổi cho dự án thứ 13.",
    "longDescription": "Sản phẩm Mẫu Landing Page & Portfolio Số 13 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 230000,
    "category": "Cho người lớn",
    "image": "https://picsum.photos/seed/landing-page-13/800/600",
    "demoUrl": "https://example.com/demo/product-13",
    "rating": 4.3,
    "sales": 295,
    "reviews": [
      {
        "id": "r13",
        "user": "Khách hàng 13",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-14",
    "name": "Công Cụ Tiện Ích Đa Năng V14",
    "description": "Giải pháp phần mềm chạy trên trình duyệt giúp tăng hiệu suất làm việc phiên bản 14.",
    "longDescription": "Sản phẩm Công Cụ Tiện Ích Đa Năng V14 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 240000,
    "category": "Công cụ tiện ích",
    "image": "https://picsum.photos/seed/utility-tool-14/800/600",
    "demoUrl": "https://example.com/demo/product-14",
    "rating": 4.4,
    "sales": 310,
    "reviews": [
      {
        "id": "r14",
        "user": "Khách hàng 14",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-15",
    "name": "Trò Chơi Giáo Dục Cho Bé Tập 15",
    "description": "Giúp bé phát triển tư duy qua các trò chơi tương tác thú vị phần 15.",
    "longDescription": "Sản phẩm Trò Chơi Giáo Dục Cho Bé Tập 15 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 250000,
    "category": "Cho bé",
    "image": "https://picsum.photos/seed/kids-game-15/800/600",
    "demoUrl": "https://example.com/demo/product-15",
    "rating": 4.5,
    "sales": 325,
    "reviews": [
      {
        "id": "r15",
        "user": "Khách hàng 15",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-16",
    "name": "Mẫu Landing Page & Portfolio Số 16",
    "description": "Giao diện hiện đại, tối ưu SEO và chuyển đổi cho dự án thứ 16.",
    "longDescription": "Sản phẩm Mẫu Landing Page & Portfolio Số 16 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 260000,
    "category": "Cho người lớn",
    "image": "https://picsum.photos/seed/landing-page-16/800/600",
    "demoUrl": "https://example.com/demo/product-16",
    "rating": 4.6,
    "sales": 340,
    "reviews": [
      {
        "id": "r16",
        "user": "Khách hàng 16",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-17",
    "name": "Công Cụ Tiện Ích Đa Năng V17",
    "description": "Giải pháp phần mềm chạy trên trình duyệt giúp tăng hiệu suất làm việc phiên bản 17.",
    "longDescription": "Sản phẩm Công Cụ Tiện Ích Đa Năng V17 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 270000,
    "category": "Công cụ tiện ích",
    "image": "https://picsum.photos/seed/utility-tool-17/800/600",
    "demoUrl": "https://example.com/demo/product-17",
    "rating": 4.7,
    "sales": 355,
    "reviews": [
      {
        "id": "r17",
        "user": "Khách hàng 17",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-18",
    "name": "Trò Chơi Giáo Dục Cho Bé Tập 18",
    "description": "Giúp bé phát triển tư duy qua các trò chơi tương tác thú vị phần 18.",
    "longDescription": "Sản phẩm Trò Chơi Giáo Dục Cho Bé Tập 18 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 280000,
    "category": "Cho bé",
    "image": "https://picsum.photos/seed/kids-game-18/800/600",
    "demoUrl": "https://example.com/demo/product-18",
    "rating": 4.8,
    "sales": 370,
    "reviews": [
      {
        "id": "r18",
        "user": "Khách hàng 18",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-19",
    "name": "Mẫu Landing Page & Portfolio Số 19",
    "description": "Giao diện hiện đại, tối ưu SEO và chuyển đổi cho dự án thứ 19.",
    "longDescription": "Sản phẩm Mẫu Landing Page & Portfolio Số 19 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 290000,
    "category": "Cho người lớn",
    "image": "https://picsum.photos/seed/landing-page-19/800/600",
    "demoUrl": "https://example.com/demo/product-19",
    "rating": 4.9,
    "sales": 385,
    "reviews": [
      {
        "id": "r19",
        "user": "Khách hàng 19",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-20",
    "name": "Công Cụ Tiện Ích Đa Năng V20",
    "description": "Giải pháp phần mềm chạy trên trình duyệt giúp tăng hiệu suất làm việc phiên bản 20.",
    "longDescription": "Sản phẩm Công Cụ Tiện Ích Đa Năng V20 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 300000,
    "category": "Công cụ tiện ích",
    "image": "https://picsum.photos/seed/utility-tool-20/800/600",
    "demoUrl": "https://example.com/demo/product-20",
    "rating": 4,
    "sales": 400,
    "reviews": [
      {
        "id": "r20",
        "user": "Khách hàng 20",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-21",
    "name": "Trò Chơi Giáo Dục Cho Bé Tập 21",
    "description": "Giúp bé phát triển tư duy qua các trò chơi tương tác thú vị phần 21.",
    "longDescription": "Sản phẩm Trò Chơi Giáo Dục Cho Bé Tập 21 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 310000,
    "category": "Cho bé",
    "image": "https://picsum.photos/seed/kids-game-21/800/600",
    "demoUrl": "https://example.com/demo/product-21",
    "rating": 4.1,
    "sales": 415,
    "reviews": [
      {
        "id": "r21",
        "user": "Khách hàng 21",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-22",
    "name": "Mẫu Landing Page & Portfolio Số 22",
    "description": "Giao diện hiện đại, tối ưu SEO và chuyển đổi cho dự án thứ 22.",
    "longDescription": "Sản phẩm Mẫu Landing Page & Portfolio Số 22 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 320000,
    "category": "Cho người lớn",
    "image": "https://picsum.photos/seed/landing-page-22/800/600",
    "demoUrl": "https://example.com/demo/product-22",
    "rating": 4.2,
    "sales": 430,
    "reviews": [
      {
        "id": "r22",
        "user": "Khách hàng 22",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-23",
    "name": "Công Cụ Tiện Ích Đa Năng V23",
    "description": "Giải pháp phần mềm chạy trên trình duyệt giúp tăng hiệu suất làm việc phiên bản 23.",
    "longDescription": "Sản phẩm Công Cụ Tiện Ích Đa Năng V23 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 330000,
    "category": "Công cụ tiện ích",
    "image": "https://picsum.photos/seed/utility-tool-23/800/600",
    "demoUrl": "https://example.com/demo/product-23",
    "rating": 4.3,
    "sales": 445,
    "reviews": [
      {
        "id": "r23",
        "user": "Khách hàng 23",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  },
  {
    "id": "product-24",
    "name": "Trò Chơi Giáo Dục Cho Bé Tập 24",
    "description": "Giúp bé phát triển tư duy qua các trò chơi tương tác thú vị phần 24.",
    "longDescription": "Sản phẩm Trò Chơi Giáo Dục Cho Bé Tập 24 là một giải pháp hoàn chỉnh được viết bằng HTML5, CSS3 và JavaScript. Code sạch, dễ dàng tùy chỉnh hình ảnh và âm thanh. Tương thích hoàn toàn với máy tính bảng và điện thoại.",
    "features": [
      "Giao diện hiện đại, bắt mắt",
      "Tương thích mọi thiết bị (Responsive)",
      "Code sạch 100%, tự viết",
      "Dễ dàng tùy chỉnh và cài đặt"
    ],
    "price": 340000,
    "category": "Cho bé",
    "image": "https://picsum.photos/seed/kids-game-24/800/600",
    "demoUrl": "https://example.com/demo/product-24",
    "rating": 4.4,
    "sales": 460,
    "reviews": [
      {
        "id": "r24",
        "user": "Khách hàng 24",
        "rating": 5,
        "comment": "Sản phẩm rất tốt, code chạy mượt.",
        "date": "2024-03-01"
      }
    ]
  }
];
