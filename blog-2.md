How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

Ans: 
Generics আসলে TypeScript-এর একটা শক্তিশালী ফিচার, যেটা দিয়ে আমি এমন reusable function/component বানাতে পারি যেটা যেকোনো data type নিয়ে কাজ করতে পারে, কিন্তু তারপরও type safety ঠিক থাকে। Generics যেকোনো ডাটা টাইপ যেমন number, string, object ইত্যাদি নিয়ে কাজ করতে পারে।

Generics দিয়ে কাজ করা যায়:
১/ Reusable কোড বানানো যায়
২/ টাইপ safety বজায় থাকে
৩/ বিভিন্ন ধরনের data structure নিয়েও error ছাড়া কাজ করা যায়