const posts = [];

const images = [
    '/images/wedding-images/wedding_1.jpg',
    '/images/wedding-images/wedding_2.jpg',
    '/images/wedding-images/wedding_3.jpg',
    '/images/wedding-images/wedding_4.jpg',
    '/images/wedding-images/wedding_5.jpg',
    '/images/wedding-images/wedding_6.jpg',
    '/images/wedding-images/wedding_7.jpg',
    '/images/wedding-images/wedding_8.jpg',
    '/images/wedding-images/wedding_9.jpg',
    '/images/wedding-images/wedding_10.jpg',
    '/images/wedding-images/wedding_11.jpg',
    '/images/wedding-images/wedding_12.jpg',
    '/images/wedding-images/wedding_13.jpg',
    '/images/wedding-images/wedding_14.jpg',
    '/images/wedding-images/wedding_15.jpg',
    '/images/wedding-images/wedding_16.jpg',
    '/images/wedding-images/wedding_17.jpg',
    '/images/wedding-images/wedding_18.jpg',
    '/images/wedding-images/wedding_19.jpg',
    '/images/wedding-images/wedding_20.jpg',
    '/images/wedding-images/wedding_21.jpg',
    '/images/wedding-images/wedding_22.jpg',
    '/images/wedding-images/wedding_23.jpg',
    '/images/wedding-images/wedding_24.jpg',
    '/images/wedding-images/wedding_25.jpg',
    '/images/wedding-images/wedding_26.jpg',
    '/images/wedding-images/wedding_27.jpg',
    '/images/wedding-images/wedding_28.jpg',
    '/images/wedding-images/wedding_29.jpg',
    '/images/wedding-images/wedding_30.jpg',
    '/images/wedding-images/wedding_31.jpg',
    '/images/wedding-images/wedding_32.jpg',
    '/images/wedding-images/wedding_33.jpg',
    '/images/wedding-images/wedding_34.jpg',
    '/images/wedding-images/wedding_35.jpg',
    '/images/wedding-images/wedding_36.jpg',
    '/images/wedding-images/wedding_37.jpg',
    '/images/wedding-images/wedding_38.jpg',
    '/images/wedding-images/wedding_39.jpg',
    '/images/wedding-images/wedding_40.jpg',
    '/images/wedding-images/wedding_41.jpg',
    '/images/wedding-images/wedding_42.jpg',
    '/images/wedding-images/wedding_43.jpg',
    '/images/wedding-images/wedding_44.jpg',
    '/images/wedding-images/wedding_45.jpg',
    '/images/wedding-images/wedding_46.jpg',
    '/images/wedding-images/wedding_47.jpg',
    '/images/wedding-images/wedding_48.jpg',
    '/images/wedding-images/wedding_49.jpg',
    '/images/wedding-images/wedding_50.jpg',
    '/images/wedding-images/wedding_51.jpg',
    '/images/wedding-images/wedding_52.jpg',
    '/images/wedding-images/wedding_53.jpg',
    '/images/wedding-images/wedding_54.jpg',
    '/images/wedding-images/wedding_55.jpg',
    '/images/wedding-images/wedding_56.jpg',
    '/images/wedding-images/wedding_57.jpg',
    '/images/wedding-images/wedding_58.jpg',
    '/images/wedding-images/wedding_59.jpg',
    '/images/wedding-images/wedding_60.jpg',
    '/images/wedding-images/wedding_61.jpg',
    '/images/wedding-images/wedding_62.jpg',
    '/images/wedding-images/wedding_63.jpg',
    '/images/wedding-images/wedding_64.jpg',
    '/images/wedding-images/wedding_65.jpg',
    '/images/wedding-images/wedding_66.jpg',
    '/images/wedding-images/wedding_67.jpg',
    '/images/wedding-images/wedding_68.jpg',
    '/images/wedding-images/wedding_69.jpg',
    '/images/wedding-images/wedding_70.jpg',
    '/images/wedding-images/wedding_71.jpg',
    '/images/wedding-images/wedding_72.jpg',
    '/images/wedding-images/wedding_73.jpg',
    '/images/wedding-images/wedding_74.jpg',
    '/images/wedding-images/wedding_75.jpg',
    '/images/wedding-images/wedding_76.jpg',
    '/images/wedding-images/wedding_77.jpg',
    '/images/wedding-images/wedding_78.jpg',
    '/images/wedding-images/wedding_79.jpg',
    '/images/wedding-images/wedding_80.jpg',
    '/images/wedding-images/wedding_81.jpg',
    '/images/wedding-images/wedding_82.jpg',
    '/images/wedding-images/wedding_83.jpg',
    '/images/wedding-images/wedding_84.jpg',
    '/images/wedding-images/wedding_85.jpg',
    '/images/wedding-images/wedding_86.jpg',
    '/images/wedding-images/wedding_87.jpg',
    '/images/wedding-images/wedding_88.jpg',
    '/images/wedding-images/wedding_89.jpg',
    '/images/wedding-images/wedding_90.jpg',
    '/images/wedding-images/wedding_91.jpg',
    '/images/wedding-images/wedding_92.jpg',
    '/images/wedding-images/wedding_93.jpg',
    '/images/wedding-images/wedding_94.jpg',
];

let imageIndex = 0;

for(let i = 1; i <= 94; i++){
    let item = {
        id: i,
        title: `Post ${i}`,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if(imageIndex > images.length - 1) imageIndex = 0;
}