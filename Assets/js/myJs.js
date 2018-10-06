$('.ui.dropdown').dropdown();

$('.ui.sidebar').sidebar('attach events', '.toc.item');


var locations = [{
    title: 'Boston',
    description: 'Massachusetts'
},
{
    title: 'Brooklyn',
    description: 'New York'
},
{
    title: 'Hawai',
    description: 'Ohio'
},
{
    title: 'Animal Meuseum',
    description: 'Las Vegas'
},
{
    title: 'Trampoline Park',
    description: 'Colombia'
},  
];
$('.ui.search.location').search({
    source: locations,
    searchFields: ['title', 'description'],
    searchFullText: false
});