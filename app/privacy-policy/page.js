import Banner from "@/components/Banner";
import Form from "@/components/Form";



export default function Home() {
  return (
    <main className="text-gray-200 container w-[90%]   mx-auto">
      <div class=" my-16">
        <div>
          <h1 class="font-bold text-4xl mb-6">প্রাইভেসি পলিসি</h1>
          <div class="my-5">
            <p class="text-gray-400">কোডিং একাডেমি ওয়েবসাইটে আমাদের প্রধান অগ্রাধিকারগুলির মধ্যে একটি হল আমাদের ইউজারদের তথ্যের গোপনীয়তা। কোডিং একাডেমি ওয়েবসাইট থেকে আমরা কি কি তথ্য সংগ্রহণ করি এবং কীভাবে সেটি ব্যবহার করি, সে সম্পর্কে বিস্তারিত তথ্য এই ডকুমেন্টে রয়েছে।</p>
            <p class="text-gray-400">আপনার যদি কোন প্রশ্ন থাকে বা আমাদের প্রাইভেসি পলিসি সম্পর্কে আরও তথ্যের প্রয়োজন হয়, তাহলে আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না।</p>
            <p class="text-gray-400">এই প্রাইভেসি পলিসি শুধুমাত্র আমাদের অনলাইন ক্রিয়াকলাপের ক্ষেত্রে প্রযোজ্য এবং আমাদের ওয়েবসাইটের দর্শকরা যে তথ্যগুলি শেয়ার করেছেন এবং/অথবা কোডিং একাডেমি ওয়েবসাইট থেকে সংগ্রহ করেছেন সেগুলির জন্য বৈধ৷ এই নীতি অফলাইনে বা এই ওয়েবসাইট ছাড়া অন্য চ্যানেলের মাধ্যমে সংগ্রহ করা কোনো তথ্যের ক্ষেত্রে প্রযোজ্য নয়।</p>
          </div>
          <div class="text-indigo-800 font-semibold text-lg !text-1 !mt-10 flex items-center space-x-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="-ml-2 text-indigo-800 " height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
            <span class="primary-highlighter">সম্মতি</span>
          </div>
          <div class="my-3">
            <p class="text-gray-400">আমাদের ওয়েবসাইট ব্যবহার করে, আপনি এতদ্বারা আমাদের প্রাইভেসি পলিসি এবং শর্তাবলীতে সম্মত হচ্ছেন বলে ধরে নেয়া হবে।</p>
          </div>
          <div class="text-indigo-800 font-semibold text-lg !text-1 !mt-10 flex items-center space-x-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="-ml-2 text-indigo-800 " height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
            <span class="primary-highlighter">আমরা কি কি তথ্য সংগ্রহ করি</span>
          </div>
          <div class="my-3">
            <p class="text-gray-400">আমরা যখন ওয়েবসাইটে আপনাকে আপনার ব্যক্তিগত তথ্য প্রদান করতে বলব, তখনই আপনাকে স্পষ্ট করে দেওয়া হবে কেন আপনাকে এটি প্রদান করতে বলা হয়েছে।</p>
            <p class="text-gray-400">আপনি যদি সরাসরি আমাদের সাথে যোগাযোগ করেন, আমরা আপনার সম্পর্কে অতিরিক্ত তথ্য নিতে পারি যেমন আপনার নাম, ইমেল ঠিকানা, ফোন নম্বর, যোগাযোগের বিষয়বস্তু এবং/অথবা যেকোন সংযুক্তি অথবা অন্য যেকোন তথ্য যেগুলো আপনি আমাদের পাঠাচ্ছেন।</p>
            <p class="text-gray-400">যখন আপনি আমাদের ওয়েবসাইটে একাউন্ট খুলবেন তখন আপনাকে কিছু ব্যক্তিগত তথ্য প্রদান করতে হবে যেমন আপনার নাম, ইমেইল এড্রেস, ছবি, মোবাইল নাম্বার, ডিসকোর্ড ইউজারনেম, ঠিকানা ইত্যাদি। এর বাইরেও পরবর্তীতে আমরা প্রয়োজনের ভিত্তিতে অতিরিক্ত তথ্য চাইতে পারি আপনার অনুমতি নিয়ে। আমরা আপনার অনুমতি ব্যতীত আপনার তথ্য কারো কাছে শেয়ার করিনা এবং তথ্যের গোপনীয়তা বজায় রাখি।</p>
          </div>
          {/* <div class="text-indigo-800 font-semibold text-lg !text-1 !mt-10 flex items-center space-x-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="-ml-2 text-indigo-800 " height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
            </svg>
            <span class="primary-highlighter">ব্যক্তিগত পাসওয়ার্ডের গোপনীয়তা</span>
          </div>
          <div class="my-3">
            <p class="text-gray-400">আমাদের ওয়েবসাইটে একাউন্ট খোলার সময় লগইন করার জন্য আপনাকে যে পাসওয়ার্ড দিতে বলা হবে সেটি আমরা আমাদের ডাটাবেজে সংরক্ষণ করার সময় এনক্রিপ্ট করে সিকিউরড ভাবে সংরক্ষণ করি। যার ফলে আপনার পাসওয়ার্ডের আসল কন্টেন্ট আমরা নিজেরাও দেখতে পাইনা। তাই আমাদের ওয়েবসাইটে আপনার পাসওয়ার্ডের গোপনীয়তা সঠিকভাবে রক্ষা করা হয়। এছাড়া আপনার পাসওয়ার্ড এর গোপনীয়তা রক্ষা করার জন্য কখনও আপনার পাসওয়ার্ড কারো সাথে শেয়ার না করার অনুরোধ করছি। যদি আপনি মনে করেন আপনার পাসওয়ার্ড কোন ভাবে আপনার কাছে থেকে অন্য কেউ পেয়ে গেছে, সাথে সাথে ওয়েবসাইট থেকে পাসওয়ার্ড পরিবর্তন করুন। যদি আপনি কোনভাবে পাসওয়ার্ড পরিবর্তন করতে ব্যর্থ হন, আমাদের সাপোর্ট এ যোগাযোগ করুন।</p>
          </div> */}
          <div class="text-indigo-800 font-semibold text-lg !text-1 !mt-10 flex items-center space-x-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="-ml-2 text-indigo-800 " height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
            <span class="primary-highlighter">আমরা কিভাবে আপনার তথ্য গুলো ব্যবহার করি</span>
          </div>
          <div class="my-3">
            <p class="text-gray-400 mb-3">আমরা আপনার থেকে যে তথ্য সংগ্রহ করি সেগুলো বিভিন্ন ভাবে ব্যবহার করি যেমন:</p>
            <ol className="list-decimal ms-4 text-[14px] text-gray-400">
              <li>আমাদের ওয়েবসাইটে তথ্য প্রদর্শণ, পরিচালনা এবং রক্ষণাবেক্ষণ করার জন্য</li>
              <li>আমাদের ওয়েবসাইট এর ব্রাউজিং অভিজ্ঞতা আরো উন্নত করার জন্য</li>
              <li>আপনি কিভাবে আমাদের ওয়েবসাইট ব্যবহার করছেন সেটি পর্যালোচনা করার জন্য</li>
              <li>নতুন পণ্য, পরিষেবা এবং ফিচার ডেভেলপ করার জন্য</li>
              <li>আপনাকে সর্বদা আমাদের নতুন প্রোডাক্ট, সার্ভিস বা পরিসেবার আপডেট দিতে এবং ওয়েবসাইটের মার্কেটিং এর প্রয়োজনে প্রত্যক্ষ বা পরোক্ষভাবে আপনার সাথে যোগাযোগ করার জন্য</li>
              <li>আপনাকে সরাসরি ইমেইল করতে</li>
              <li>কোন ধরণের অযাচিত অনলাইন বা অফলাইন জালিয়াতি প্রতিরোধে</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}