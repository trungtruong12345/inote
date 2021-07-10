<template lang="">
    <div id='header' class='slide-in-top'>
        <div class=''>
            <!-- Accordion with No Space example -->
            <div class="panel-group pmd-accordion pmd-accordion-nospace" id="accordion5" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                    <div class="panel-heading title" role="tab" id="headingThree">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion5" href="#collapseThree5" aria-expanded="false" aria-controls="collapseThree5" data-expandable="false" class='drd'>
                                    <div class='tracking-in-expand'>{{ title }}</div>
                                    <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i>
                                </a>
                        </h4>
                    </div>
                    <div id="collapseThree5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                            <form-search></form-search>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Accordion with No Space example end -->
        </div>
    </div>
</template>

<script>
import FormSearch from '../../../components/vocabularies/formSearch.vue'
export default {
    components: { FormSearch },
    props: ['title'],
}
</script>

<style lang="scss" scoped>
#header {
    $color: #557eb3;
    $radius: 0px 0px 7px 7px;;
    a {
        text-decoration: none;
    }
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1000;
    &>div {
        margin: 0 auto;
        max-width: 462px;
        border: 0;
        border-radius: $radius;
        .panel-group {
            margin-bottom: 0px;
            .panel {
                background-color: $color;
            }
        }
        & div {
            border: 0;
            border-radius: $radius;
        }
    }
    .title {
        text-align: center;
        a {
            color: white;
            padding: 0.25rem 1rem;
            &:hover {
                background-color: $color;
                border: 0;
                border-radius: $radius;
            }
        }
        h4 {
            border: 0;
            border-radius: $radius;
            i {
                position: absolute;
                right: 8px;
                top: 5px;
                color: white;
            }
        }
    }
}
</style>