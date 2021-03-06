/**
 * member管理初始化
 */
var Member = {
    id: "MemberTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Member.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: 'id', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '用户id', field: 'memberID', visible: true, align: 'center', valign: 'middle'},
            {title: '用户名', field: 'name', visible: true, align: 'center', valign: 'middle'},
            {title: '手机', field: 'mobile', visible: true, align: 'center', valign: 'middle'},
            // {title: '', field: 'password', visible: true, align: 'center', valign: 'middle'},
            // {title: '微信id', field: 'weixinId', visible: true, align: 'center', valign: 'middle'},
            // {title: '性别', field: 'gender', visible: false, align: 'center', valign: 'middle'},
            {title: '性别', field: 'genderName', visible: true, align: 'center', valign: 'middle'},
            // {title: '', field: 'birthday', visible: true, align: 'center', valign: 'middle'},
            {title: '原金币', field: 'coins', visible: false, align: 'center', valign: 'middle'},
            {title: '金币', field: 'Acoins', visible: true, align: 'center', valign: 'middle'},
            {title: '钻石', field: 'superTicket', visible: true, align: 'center', valign: 'middle'},
            // {title: '', field: 'points', visible: true, align: 'center', valign: 'middle'},
            {title: '抓取次数', field: 'catchNumber', visible: true, align: 'center', valign: 'middle'},
            {title: '注册时间', field: 'registerDate', visible: true, align: 'center', valign: 'middle'},
            // {title: '', field: 'modifiedDate', visible: true, align: 'center', valign: 'middle'},
            // {title: '', field: 'modifiedBy', visible: true, align: 'center', valign: 'middle'},
            {title: '最近登录时间', field: 'lastLoginDate', visible: true, align: 'center', valign: 'middle'},
            // {title: '', field: 'lastLogoffDate', visible: true, align: 'center', valign: 'middle'},
            // {title: '是否在线 ', field: 'onlineFlg', visible: true, align: 'center', valign: 'middle'},
            // {title: '', field: 'iconContextPath', visible: true, align: 'center', valign: 'middle'},
            // {title: '', field: 'iconFileName', visible: true, align: 'center', valign: 'middle'},
            // {title: '', field: 'iconRealPath', visible: true, align: 'center', valign: 'middle'},
            // {title: '环信uuid', field: 'easemobUuid', visible: true, align: 'center', valign: 'middle'},
            {title: '是否有效', field: 'activeFlg', visible: true, align: 'center', valign: 'middle',
                formatter:function (value,row,index) {
                    if(value){
                        return '<span class="label label-success radius">有效</span>';
                    }else {
                        return '<span class="label label-danger radius">无效</span>';
                    }
                }
            },
            // {title: '是否已输入邀请码', field: 'inviteFlg', visible: true, align: 'center', valign: 'middle'},
            // {title: '', field: 'inviteFlgWeb', visible: true, align: 'center', valign: 'middle'},
            // {title: '注册设备', field: 'registerFrom', visible: true, align: 'center', valign: 'middle'},
            {title: '登录设备', field: 'lastLoginFrom', visible: true, align: 'center', valign: 'middle'},
            {title: '寄存个数', field: 'checkIn', visible: true, align: 'center', valign: 'middle'},
            // {title: '0尚未充值，1已充值', field: 'firstLogin', visible: true, align: 'center', valign: 'middle'},
            // {title: '0尚未充值过，1已完成过充值', field: 'firstCharge', visible: true, align: 'center', valign: 'middle'},
            // {title: '注册渠道号', field: 'registerChannel', visible: true, align: 'center', valign: 'middle'},
            // {title: '登陆渠道号', field: 'loginChannel', visible: true, align: 'center', valign: 'middle'},
            // {title: '手机机型', field: 'phoneModel', visible: true, align: 'center', valign: 'middle'}
            {title: 'vip等级', field: 'vipGroup', visible: true, align: 'center', valign: 'middle'},
    ];
};



/**
 * 检查是否选中
 */
Member.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Member.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加member
 */
// Member.openAddMember = function () {
//     var index = layer.open({
//         type: 2,
//         title: '添加member',
//         area: ['800px', '420px'], //宽高
//         fix: false, //不固定
//         maxmin: true,
//         content: Feng.ctxPath + '/member/member_add'
//     });
//     this.layerIndex = index;
// };

/**
 * 打开查看member详情
 */
Member.openMemberDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '用户修改金币',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/member/member_update/' + Member.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 打开查看充值记录详情
 */
Member.openMemberChargeDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '充值记录详情',
            area: ['900px', '520px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/member/chargeDetail/' + Member.seItem.id

        });
        this.layerIndex = index;

    }
};

/**
 * 打开查看抓取记录详情
 */
Member.openMemberCatchDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '抓取记录详情',
            area: ['900px', '520px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/member/catchDetail/' + Member.seItem.id
        });
        this.layerIndex = index;
    }
};


/**
 * 打开查看寄存详情
 */
Member.openMemberGoodsDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '查看寄存详情',
            area: ['900px', '520px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/member/goodsDetail/' + Member.seItem.id
        });
        this.layerIndex = index;
    }
};



//用户封号
Member.closeMember = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/member/closeMember", function (data) {
            Feng.success("操作成功!");
            Member.table.refresh();
        }, function (data) {
            Feng.error("操作失败!" + data.responseJSON.message + "!");
        });
        ajax.set("memberId",this.seItem.id);
        ajax.start();
    }
};

//解封
Member.openMember = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/member/openMember", function (data) {
            Feng.success("操作成功!");
            Member.table.refresh();
        }, function (data) {
            Feng.error("操作失败!" + data.responseJSON.message + "!");
        });
        ajax.set("memberId",this.seItem.id);
        ajax.start();
    }
};
/**
 * 删除member
 */
// Member.delete = function () {
//     if (this.check()) {
//         var ajax = new $ax(Feng.ctxPath + "/member/delete", function (data) {
//             Feng.success("删除成功!");
//             Member.table.refresh();
//         }, function (data) {
//             Feng.error("删除失败!" + data.responseJSON.message + "!");
//         });
//         ajax.set("memberId",this.seItem.id);
//         ajax.start();
//     }
// };

/**
 * 查询member列表
 */
Member.search = function () {
    var queryData = {};
    queryData['id'] = $("#id").val();
    queryData['userId'] = $("#userId").val();
    queryData['userName'] = $("#userName").val();
    queryData['registerDate'] = $("#registerDate").val();
    queryData['lastLoginFrom'] = $("#lastLoginFrom").val();
    Member.load();
    Member.table.refresh({query: queryData});
};
/**
 * zongjine
 */
Member.load = function(){
	 $("#totalCoins").val(10000);
};

//jquery实现回车键触发事件
$(document).keyup(function(event){
    if(event.keyCode ==13){
        Member.search();
    }
});

$(function () {
	Member.load();
    var defaultColunms = Member.initColumn();
    var table = new BSTable(Member.id, "/member/list", defaultColunms);
    table.setPaginationType("server");
    Member.table = table.init();
    
});


