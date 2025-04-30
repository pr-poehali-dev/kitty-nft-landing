import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Как минтовать NFT из коллекции Kitty?",
    answer: "Для минта NFT необходимо подключить кошелек MetaMask, выбрать количество NFT для минта и подтвердить транзакцию. Вам понадобится ETH для оплаты NFT и комиссий сети."
  },
  {
    question: "Какой блокчейн используется для коллекции?",
    answer: "Коллекция Kitty развернута на основной сети Ethereum (Mainnet). Это обеспечивает максимальную безопасность и совместимость с большинством маркетплейсов."
  },
  {
    question: "Какая лицензия у коллекции Kitty?",
    answer: "Все NFT коллекции Kitty распространяются по лицензии CC0 (Creative Commons Zero). Это означает, что вы получаете полные коммерческие права на ваши NFT и можете использовать их любым способом."
  },
  {
    question: "Где я могу продать свои NFT после минта?",
    answer: "После минта вы можете выставить свои NFT на популярных маркетплейсах, таких как OpenSea, LooksRare и других. Наша коллекция полностью совместима со всеми основными торговыми площадками."
  },
  {
    question: "Есть ли ройялти с вторичных продаж?",
    answer: "Да, с каждой вторичной продажи 5% идет обратно в казну проекта. Эти средства используются для дальнейшего развития экосистемы и обеспечения дополнительной ценности для всех холдеров."
  }
];

const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
          <AccordionTrigger className="text-left text-lg font-space hover:text-primary">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
