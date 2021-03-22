({
    packItem : function(component, event, helper) {
        console.log('Before Update: ' + JSON.stringify(v.item));
        v.item.Packed__c = true;
        component.set("disabled", true);
        console.log('Before Update: ' + JSON.stringify(v.item));

    }
})
