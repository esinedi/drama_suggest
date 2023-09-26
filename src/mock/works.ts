// 引入mockjs
import Mock from 'mockjs'
// 类型
import { yearsType, moviesType, searchType } from '@/store/type/year'
import { log } from 'console'

const yearsData = function () {
  let yaersData: yearsType[] = [
    {
        yearsId: 1,
        yearsName: '先秦'
    },
    {
        yearsId: 2,
        yearsName: '汉'
    },
    {
        yearsId: 3,
        yearsName: '三国'
    },
    {
        yearsId: 4,
        yearsName: '唐'
    },
    {
        yearsId: 5,
        yearsName: '明'
    },
  ]
 
  return yaersData
}

const moviesData = function (data: any) {
    const search: searchType = JSON.parse(data.body)
    let moviesDatas: moviesType[] = [
        {
            moviesId: 0,
            yearsId: 4,
            title: '贞观之治',
            performer: ['马跃', '苗圃', '马精武', '马少骅', '陆剑民', '金士杰'],
            director: '张建亚',
            time: '2006',
            content: '公元620年，唐武德三年七月，唐朝开国皇帝李渊的次子——秦王李世民奉父之命东征洛阳。洛阳是前朝隋的东都，在政治、军事、经济各方面都有着举足轻重的意义。洛阳之战也就成了唐朝统一中原的最重要一仗。经过李世民军队长达数月的围困，洛阳城内已经没有了和唐军对抗的力量，洛阳的首领王世充只好把希望寄托在救兵上。河北的窦建德带领几十万大军浩浩荡荡向洛阳进发，要解洛阳之围。李世民命弟弟齐王李元吉留守大本营，自己亲自带兵迎击窦建德的大军。李世民充分利用地形的优势，用几千人击败了窦建德的大军，并将窦建德本人擒获。王世充见大势已去，只得开城投降。李世民一举击败了大唐的两个最有实力的敌人，功劳传遍了天下。李渊为了表彰李世民的功绩，封他为天策上将，并赋予了种种特权，地位几乎已经与太子不相上下。李世民势力的急剧扩张引起了李元吉的忌恨，也让太子李建成深感不安。李元吉对权力和地位的贪心越来越大，他表面上鲁莽，但实际上已设计好了一个巨大的阴谋。他决定先联合太子整倒二哥李世民，再从太子手中篡取皇位。李元吉利用李建成对李世民的猜疑，趁机从中挑拨。李建成和李元吉一面在表面上压制李世民，一面在暗中培养自己的势力。阴谋一步步酝酿，最终李元吉制定出了除掉李世民的完整具体的行动计划。消息传到李世民耳中，李世民与众谋士商议后决定抢先下手。第二天一早，李世民就占领了玄武门，隔断了李建成、李元吉和城外军队的联系。随后一场血雨腥风的激战开始了。交手中，李世民亲手杀死了自己的两个兄弟。这就是历史上著名的玄武门之变。李世民如愿成了太子，掌握了朝政大权。他没有清剿李建成和李元吉的余部，反而将一些有能力的人才收到自己门下，这其中就包括以中正刚直而闻名的谋士魏征。从这以后，李世民就再难逃被魏征当面训斥的命运。李世民为了表明自己让天下和解的决心，不仅下诏不准再追查李建成和李元吉余党，还派魏征为制使，出使河北，传达自己的意思。公元626年，武德九年，八月初八，李渊传大唐皇帝位于太子李世民，自己成为太上皇。武德九年八月二十八日，突厥趁唐朝朝政不稳进犯中原，抵达关中渭水边，直逼长安。李世民心里清楚，凭现在唐的实力，还无法与突厥对抗，索性委曲求全，向突厥纳贡，换取中原的和平生息。李世民登基后，深切感受到了治天下和打天下的巨大差距。他修改了国号，以代表宽忍和善的“贞观”取代了原来的“武德”，正式开始了历时二十余年被后人称为“贞观之治”的时代。李世民为了推行新政，开始清除自己治国道路上的一些巨大的障碍。其中一个，就是各种名目的封王。当年太上皇李渊打天下时为了笼络人心，给各路人马随意加官晋爵。虽然其中有些只是虚职，但也独霸一方，占有大量土地资源，每年还要领取丰厚的俸禄。李世民削减封王的想法还没有对外宣布，就已经在朝野中引起了巨大的反响。削减封王影响了众多王侯贵族的直接利益，义安王李孝常联合其他一些反对者，打算用清君侧的名义，以武力胁迫李世民。李世民早已掌握了他们的动向，干净利落的粉碎了他们的阴谋，并以自己的威严镇慑住了朝中百官。关中大旱。李世民为感动上苍，负荆祈雨。但李世民的诚心并未缓解旱情。李世民无奈，只能开关放人，允许受灾百姓到关外去乞食为生。玄奘也随着灾民的队伍出关，开始了他西域取经的旅程。经过几年时间的建设，大唐王朝的国力已经积攒了一定的实力，为了解决边疆问题，李世民决定征伐突厥。贞观三年八月十九日，李世民命兵部尚书李靖为行军总管，征伐突厥。突厥内部此时发生了严重的纠纷，两位可汗矛盾重重。李靖的军队稍一冲击，突厥军便彻底溃散了。平定了突厥，西北周边二十几个国家都来朝贺。在高昌王的建议下，李世民被各国拥为“天可汗”。一时间，从中原通往西域的各种商业、外交通道纷纷开通，长安成了名副其实的国际大都会。随着国力的不断增强，李世民的目光不得不开始投向未来。一个棘手的问题摆在了他的面前——选谁作为继任者。太子李承乾虽然是长子且能力值得信赖，却不愿读书，性情古怪，终日沉迷于酒色。次子李泰是个很有心机的人，他在一些能人的辅佐下，方方面面都得到了李世民的青睐。朝中大臣也都纷纷作出了自己的选择，有的支持李承乾，有的支持李泰。唯独长孙无忌看中了软弱忠厚的李治，并给了李治极大的帮助。深受李世民宠爱的武才人——也就是后来的女皇武则天与李治关系非同寻常。她告诉李治，现在李承乾和李泰的实力虽然都很雄厚，但也许会形成鹬蚌相争的局面，到时候他们只要坐收渔翁之利就可以了。李承乾越来越强烈的感受到来自李世民和李泰的压力。最终，在形势的逼迫和众人的怂恿下，李承乾决定杀掉父皇和弟弟。李承乾幼稚的计划还没有开始实施就被粉碎了。李世民不愿再杀害亲人，便将李承乾流放。在长孙无忌和武才人的努力下，李世民没有立李泰为太子，反而立了李治为太子。经过十几年的长途跋涉，玄奘取经回到了长安。在李世民的支持下，玄奘在弘福寺展开中国历史上第一次最大的外来文化翻译工程。北漠叛乱，李世民御驾亲征。然而恶劣的气候让唐军随时惨重，李世民也从这场失败的战争起一蹶不振。李世民的身体已经不允许他继续主持朝政。他将国家政务都托付给了李治。可想到自己离开人世后，李治要担起全部的责任，仍不放心。他将李治托付给长孙无忌，要他辅佐未来新的皇帝。房玄龄、李靖等老臣纷纷去世，留下李世民一人孤独的度过最后的时光。公元649年，贞观二十三年，五月二十六日，初唐第二代帝王太宗李世民去世。之后，是大唐盛世。'
        }
    ]
    let moviesData: moviesType[] = []
    
    if(search.yearsId.length !== 0) {
        search.yearsId.forEach(yearsId => {
            moviesData = [
                ...moviesData,
                ...moviesDatas.filter(item => item.yearsId === yearsId)
            ]
        })
        // 标题匹配方法
        moviesData = moviesData.filter(item => item.title.indexOf(search.search) !== -1)
    }else{
        moviesData = moviesDatas.filter(item => item.title.indexOf(search.search) !== -1)
    }
    
    return moviesData
}

Mock.mock('/work/movies','post', moviesData) 
Mock.mock('/work/years','get', yearsData) 